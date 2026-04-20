import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface SectionRow {
  id: string;
  page_id: string;
  section_key: string;
  layout_variant: string;
  is_visible: boolean;
  display_order: number;
  title_en: string | null; title_ar: string | null;
  subtitle_en: string | null; subtitle_ar: string | null;
  description_en: string | null; description_ar: string | null;
  button_label_en: string | null; button_label_ar: string | null; button_url: string | null;
  image_url: string | null; background_url: string | null;
  extra: any;
}

/** Fetch all visible sections for a page slug, with realtime updates */
export const usePageSections = (pageSlug: string) => {
  const [sections, setSections] = useState<SectionRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let pageId: string | null = null;

    const load = async () => {
      const { data: page } = await supabase.from('pages').select('id').eq('slug', pageSlug).maybeSingle();
      if (!page) { setSections([]); setLoading(false); return; }
      pageId = page.id;
      const { data } = await supabase.from('sections').select('*')
        .eq('page_id', pageId).eq('is_visible', true).order('display_order');
      setSections((data as SectionRow[]) ?? []);
      setLoading(false);
    };

    load();

    // Realtime subscription
    const channel = supabase
      .channel(`sections-${pageSlug}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'sections' }, () => load())
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [pageSlug]);

  return { sections, loading };
};

/** Generic hook to fetch a published list from a table with realtime */
export const useDbList = <T = any>(table: string, opts?: { order?: string; ascending?: boolean }) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      let q = supabase.from(table as any).select('*');
      if (opts?.order) q = q.order(opts.order, { ascending: opts?.ascending ?? true });
      const { data } = await q;
      setItems((data as T[]) ?? []);
      setLoading(false);
    };
    load();

    const channel = supabase
      .channel(`list-${table}`)
      .on('postgres_changes', { event: '*', schema: 'public', table }, () => load())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return { items, loading };
};

export interface SiteSettings {
  site_name_en: string | null; site_name_ar: string | null;
  email: string | null; phone: string | null; whatsapp: string | null;
  facebook_url: string | null; instagram_url: string | null;
  youtube_url: string | null; linkedin_url: string | null; twitter_url: string | null;
  address_en: string | null; address_ar: string | null;
  logo_url: string | null; favicon_url: string | null;
}

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('site_settings').select('*').maybeSingle();
      setSettings(data as SiteSettings | null);
    };
    load();
    const ch = supabase.channel('site-settings')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'site_settings' }, load)
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, []);
  return settings;
};
