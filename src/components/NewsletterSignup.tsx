import React, { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterSignup: React.FC = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    const { error } = await supabase.from('newsletter_subscribers').insert({ email, language });
    setBusy(false);
    if (error) {
      if (error.code === '23505') toast.info(t({ en: 'Already subscribed', ar: 'مشترك بالفعل' }));
      else toast.error(error.message);
      return;
    }
    toast.success(t({ en: 'Subscribed! You will receive our latest news.', ar: 'تم الاشتراك! ستصلك آخر الأخبار.' }));
    setEmail('');
  };

  return (
    <form onSubmit={subscribe} className="flex gap-2 max-w-md">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder={t({ en: 'your@email.com', ar: 'بريدك@example.com' })} className="pl-10" />
      </div>
      <Button type="submit" disabled={busy}>
        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : t({ en: 'Subscribe', ar: 'اشتراك' })}
      </Button>
    </form>
  );
};

export default NewsletterSignup;
