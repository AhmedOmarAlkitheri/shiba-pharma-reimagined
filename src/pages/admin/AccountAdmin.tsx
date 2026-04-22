import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, KeyRound, UserPlus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const AccountAdmin: React.FC = () => {
  const { user } = useAuth();
  const [pw, setPw] = useState(''); const [pw2, setPw2] = useState('');
  const [busy, setBusy] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ email: '', password: '', display_name: '' });
  const [creating, setCreating] = useState(false);

  const changePassword = async () => {
    if (pw.length < 6) return toast.error('Min 6 characters');
    if (pw !== pw2) return toast.error('Passwords do not match');
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success('Password updated'); setPw(''); setPw2('');
  };

  const createAdmin = async () => {
    if (!newAdmin.email || newAdmin.password.length < 6) return toast.error('Email and password (min 6) required');
    setCreating(true);
    const { data, error } = await supabase.functions.invoke('create-admin', { body: newAdmin });
    setCreating(false);
    if (error) return toast.error(error.message);
    if ((data as any)?.error) return toast.error((data as any).error);
    toast.success('Admin created');
    setNewAdmin({ email: '', password: '', display_name: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">My Account</h1>
      <p className="text-sm text-muted-foreground mb-6">Signed in as {user?.email}</p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><KeyRound className="w-4 h-4" /> Change Password</h2>
          <div className="space-y-3">
            <div><Label>New Password</Label><Input type="password" value={pw} onChange={(e) => setPw(e.target.value)} /></div>
            <div><Label>Confirm</Label><Input type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} /></div>
            <Button onClick={changePassword} disabled={busy}>
              {busy && <Loader2 className="w-4 h-4 mr-1 animate-spin" />} Update Password
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><UserPlus className="w-4 h-4" /> Add New Admin</h2>
          <div className="space-y-3">
            <div><Label>Display Name</Label><Input value={newAdmin.display_name} onChange={(e) => setNewAdmin({ ...newAdmin, display_name: e.target.value })} /></div>
            <div><Label>Email</Label><Input type="email" value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} /></div>
            <div><Label>Temporary Password</Label><Input type="password" value={newAdmin.password} onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })} /></div>
            <Button onClick={createAdmin} disabled={creating}>
              {creating && <Loader2 className="w-4 h-4 mr-1 animate-spin" />} Create Admin
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AccountAdmin;
