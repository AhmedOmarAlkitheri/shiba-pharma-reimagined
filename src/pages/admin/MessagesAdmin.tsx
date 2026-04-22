import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Mail, Trash2, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const MessagesAdmin: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
    setItems(data ?? []); setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const toggleRead = async (id: string, is_read: boolean) => {
    await supabase.from('contact_messages').update({ is_read: !is_read }).eq('id', id);
    load();
  };
  const remove = async (id: string) => {
    if (!confirm('Delete this message?')) return;
    await supabase.from('contact_messages').delete().eq('id', id);
    toast.success('Deleted'); load();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
      <p className="text-sm text-muted-foreground mb-6">Messages received from the contact form.</p>
      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <div className="space-y-3">
          {items.map((m) => (
            <Card key={m.id} className={`p-4 ${!m.is_read ? 'border-primary/40 bg-primary/5' : ''}`}>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{m.name}</p>
                    <a href={`mailto:${m.email}`} className="text-sm text-primary">{m.email}</a>
                    {!m.is_read && <Badge>New</Badge>}
                    <span className="text-xs text-muted-foreground ml-auto">{new Date(m.created_at).toLocaleString()}</span>
                  </div>
                  {m.subject && <p className="font-medium text-sm mb-1">{m.subject}</p>}
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{m.message}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <Button size="sm" variant="outline" onClick={() => toggleRead(m.id, m.is_read)}>
                    {m.is_read ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => remove(m.id)}>
                    <Trash2 className="w-3 h-3 text-destructive" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          {items.length === 0 && <p className="text-center py-8 text-muted-foreground">No messages yet.</p>}
        </div>
      )}
    </div>
  );
};

export default MessagesAdmin;
