import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Shield, User as UserIcon, Pencil } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProfileRow {
  id: string; user_id: string; email: string | null; display_name: string | null; created_at: string;
}
interface RoleRow { user_id: string; role: 'admin' | 'editor' | 'user'; }

const UsersAdmin: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [roles, setRoles] = useState<Record<string, RoleRow['role']>>({});
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const [{ data: p }, { data: r }] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: false }),
      supabase.from('user_roles').select('user_id, role'),
    ]);
    setProfiles(p ?? []);
    const map: Record<string, RoleRow['role']> = {};
    (r ?? []).forEach((row: any) => { map[row.user_id] = row.role; });
    setRoles(map);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const setRole = async (user_id: string, role: RoleRow['role']) => {
    // Delete existing roles then insert new
    await supabase.from('user_roles').delete().eq('user_id', user_id);
    const { error } = await supabase.from('user_roles').insert({ user_id, role });
    if (error) return toast.error(error.message);
    setRoles((m) => ({ ...m, [user_id]: role }));
    toast.success('Role updated');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Users & Roles</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage user permissions. Only admins can access the dashboard.</p>

      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <Card className="p-4">
          <div className="space-y-2">
            {profiles.map((p) => {
              const role = roles[p.user_id] ?? 'user';
              return (
                <div key={p.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    {role === 'admin' ? <Shield className="w-5 h-5 text-accent" /> : <UserIcon className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{p.display_name || p.email}</p>
                    <p className="text-xs text-muted-foreground truncate">{p.email}</p>
                  </div>
                  <Select value={role} onValueChange={(v) => setRole(p.user_id, v as RoleRow['role'])}>
                    <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              );
            })}
            {profiles.length === 0 && <p className="text-center py-8 text-muted-foreground">No users yet.</p>}
          </div>
        </Card>
      )}
    </div>
  );
};

export default UsersAdmin;
