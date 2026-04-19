import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Save, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface PageRow { id: string; slug: string; title_en: string; title_ar: string; }
interface SectionRow {
  id: string; page_id: string; section_key: string; layout_variant: string; is_visible: boolean; display_order: number;
  title_en: string | null; title_ar: string | null;
  subtitle_en: string | null; subtitle_ar: string | null;
  description_en: string | null; description_ar: string | null;
  button_label_en: string | null; button_label_ar: string | null; button_url: string | null;
  image_url: string | null; background_url: string | null;
}

const PagesAdmin: React.FC = () => {
  const [pages, setPages] = useState<PageRow[]>([]);
  const [activePageId, setActivePageId] = useState<string | null>(null);
  const [sections, setSections] = useState<SectionRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('pages').select('id, slug, title_en, title_ar').order('display_order').then(({ data }) => {
      setPages(data ?? []);
      if (data?.[0]) setActivePageId(data[0].id);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!activePageId) return;
    supabase.from('sections').select('*').eq('page_id', activePageId).order('display_order')
      .then(({ data }) => setSections((data as SectionRow[]) ?? []));
  }, [activePageId]);

  const updateSection = (id: string, patch: Partial<SectionRow>) => {
    setSections(s => s.map(sec => sec.id === id ? { ...sec, ...patch } : sec));
  };

  const saveSection = async (sec: SectionRow) => {
    const { id, page_id, section_key, ...rest } = sec;
    const { error } = await supabase.from('sections').update(rest).eq('id', id);
    if (error) toast.error(error.message); else toast.success('Saved');
  };

  if (loading) return <Loader2 className="w-6 h-6 animate-spin" />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Pages & Sections</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {pages.map(p => (
          <Button key={p.id} variant={activePageId === p.id ? 'default' : 'outline'}
            size="sm" onClick={() => setActivePageId(p.id)}>
            {p.title_en}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {sections.length === 0 && (
          <Card className="p-8 text-center text-muted-foreground">
            No sections yet for this page.
          </Card>
        )}
        {sections.map(sec => (
          <Card key={sec.id} className="p-6">
            <div className="flex items-center justify-between mb-4 pb-4 border-b">
              <div>
                <h3 className="font-semibold text-lg capitalize">{sec.section_key} Section</h3>
                <p className="text-xs text-muted-foreground">Order: {sec.display_order}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {sec.is_visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
                  <Switch checked={sec.is_visible} onCheckedChange={(v) => updateSection(sec.id, { is_visible: v })} />
                </div>
                <Select value={sec.layout_variant} onValueChange={(v) => updateSection(sec.id, { layout_variant: v })}>
                  <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design-1">Design 1</SelectItem>
                    <SelectItem value="design-2">Design 2</SelectItem>
                    <SelectItem value="design-3">Design 3</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="sm" onClick={() => saveSection(sec)}><Save className="w-4 h-4 mr-1" />Save</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title (EN)</Label>
                <Input value={sec.title_en ?? ''} onChange={(e) => updateSection(sec.id, { title_en: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Title (AR)</Label>
                <Input dir="rtl" value={sec.title_ar ?? ''} onChange={(e) => updateSection(sec.id, { title_ar: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Subtitle (EN)</Label>
                <Input value={sec.subtitle_en ?? ''} onChange={(e) => updateSection(sec.id, { subtitle_en: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Subtitle (AR)</Label>
                <Input dir="rtl" value={sec.subtitle_ar ?? ''} onChange={(e) => updateSection(sec.id, { subtitle_ar: e.target.value })} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Description (EN)</Label>
                <Textarea rows={3} value={sec.description_en ?? ''} onChange={(e) => updateSection(sec.id, { description_en: e.target.value })} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Description (AR)</Label>
                <Textarea rows={3} dir="rtl" value={sec.description_ar ?? ''} onChange={(e) => updateSection(sec.id, { description_ar: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Button Label (EN)</Label>
                <Input value={sec.button_label_en ?? ''} onChange={(e) => updateSection(sec.id, { button_label_en: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Button Label (AR)</Label>
                <Input dir="rtl" value={sec.button_label_ar ?? ''} onChange={(e) => updateSection(sec.id, { button_label_ar: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Button URL</Label>
                <Input value={sec.button_url ?? ''} onChange={(e) => updateSection(sec.id, { button_url: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input value={sec.image_url ?? ''} onChange={(e) => updateSection(sec.id, { image_url: e.target.value })} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Background URL</Label>
                <Input value={sec.background_url ?? ''} onChange={(e) => updateSection(sec.id, { background_url: e.target.value })} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PagesAdmin;
