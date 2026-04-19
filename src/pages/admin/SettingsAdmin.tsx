import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const SettingsAdmin: React.FC = () => {
  const [s, setS] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('site_settings').select('*').limit(1).maybeSingle().then(({ data }) => {
      setS(data); setLoading(false);
    });
  }, []);

  const save = async () => {
    const { id, created_at, updated_at, ...rest } = s;
    const { error } = await supabase.from('site_settings').update(rest).eq('id', id);
    if (error) toast.error(error.message); else toast.success('Settings saved');
  };

  if (loading || !s) return <Loader2 className="w-6 h-6 animate-spin" />;

  const field = (key: string, label: string, type = 'text', dir?: 'rtl') => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input dir={dir} type={type} value={s[key] ?? ''} onChange={e => setS({ ...s, [key]: e.target.value })} />
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Site Settings</h1>
        <Button onClick={save}><Save className="w-4 h-4 mr-1" />Save</Button>
      </div>
      <Card className="p-6 space-y-6">
        <div>
          <h2 className="font-semibold mb-3">General</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {field('site_name_en', 'Site Name (EN)')}
            {field('site_name_ar', 'Site Name (AR)', 'text', 'rtl')}
            {field('logo_url', 'Logo URL')}
            {field('favicon_url', 'Favicon URL')}
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {field('phone', 'Phone')}
            {field('email', 'Email', 'email')}
            <div className="md:col-span-2 space-y-2">
              <Label>Address (EN)</Label>
              <Textarea value={s.address_en ?? ''} onChange={e => setS({ ...s, address_en: e.target.value })} />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label>Address (AR)</Label>
              <Textarea dir="rtl" value={s.address_ar ?? ''} onChange={e => setS({ ...s, address_ar: e.target.value })} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Social</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {field('facebook_url', 'Facebook')}
            {field('twitter_url', 'Twitter / X')}
            {field('instagram_url', 'Instagram')}
            {field('linkedin_url', 'LinkedIn')}
            {field('youtube_url', 'YouTube')}
            {field('whatsapp', 'WhatsApp Link')}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SettingsAdmin;
