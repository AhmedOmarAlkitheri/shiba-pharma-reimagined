import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Loader2, Trash2, Send, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const SubscribersAdmin: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false });
    setItems(data ?? []); setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const toggle = async (id: string, v: boolean) => {
    await supabase.from('newsletter_subscribers').update({ is_active: v }).eq('id', id); load();
  };
  const remove = async (id: string) => {
    if (!confirm('Remove this subscriber?')) return;
    await supabase.from('newsletter_subscribers').delete().eq('id', id);
    toast.success('Removed'); load();
  };

  const broadcast = async () => {
    if (!subject || !body) return toast.error('Subject and body required');
    setSending(true);
    const { data, error } = await supabase.functions.invoke('send-newsletter', {
      body: { subject, html: body },
    });
    setSending(false);
    if (error) return toast.error(error.message);
    toast.success(`Sent to ${data?.sent ?? 0} subscribers`);
    setSubject(''); setBody('');
  };

  const exportCsv = () => {
    const csv = ['email,name,language,active,created_at',
      ...items.map((s) => `${s.email},${s.name ?? ''},${s.language},${s.is_active},${s.created_at}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'subscribers.csv'; a.click();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Newsletter Subscribers</h1>
          <p className="text-sm text-muted-foreground mt-1">{items.length} total · {items.filter((i) => i.is_active).length} active</p>
        </div>
        <Button variant="outline" onClick={exportCsv}><Download className="w-4 h-4 mr-1" />Export CSV</Button>
      </div>

      <Card className="p-6 mb-6">
        <h2 className="font-semibold mb-3 flex items-center gap-2"><Send className="w-4 h-4" /> Broadcast Newsletter</h2>
        <div className="space-y-3">
          <div>
            <Label>Subject</Label>
            <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="New product launch..." />
          </div>
          <div>
            <Label>Body (HTML allowed)</Label>
            <textarea className="w-full min-h-[140px] border rounded-md p-3 text-sm" value={body} onChange={(e) => setBody(e.target.value)} placeholder="<h2>Hello!</h2><p>...</p>" />
          </div>
          <Button onClick={broadcast} disabled={sending}>
            {sending ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Send className="w-4 h-4 mr-1" />}
            Send to all active subscribers
          </Button>
        </div>
      </Card>

      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <Card className="p-4">
          <div className="space-y-2">
            {items.map((s) => (
              <div key={s.id} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{s.email}</p>
                  <p className="text-xs text-muted-foreground">
                    {s.name || '—'} · {s.language?.toUpperCase()} · {new Date(s.created_at).toLocaleDateString()}
                  </p>
                </div>
                <Switch checked={s.is_active} onCheckedChange={(v) => toggle(s.id, v)} />
                <Button size="sm" variant="outline" onClick={() => remove(s.id)}><Trash2 className="w-3 h-3 text-destructive" /></Button>
              </div>
            ))}
            {items.length === 0 && <p className="text-center py-8 text-muted-foreground">No subscribers yet.</p>}
          </div>
        </Card>
      )}
    </div>
  );
};

export default SubscribersAdmin;
