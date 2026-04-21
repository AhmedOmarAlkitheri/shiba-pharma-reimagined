import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Save, Eye, EyeOff, GripVertical, Plus, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import MediaPicker from '@/components/admin/MediaPicker';
import {
  DndContext, closestCenter, PointerSensor, useSensor, useSensors, type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext, useSortable, verticalListSortingStrategy, arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface PageRow { id: string; slug: string; title_en: string; title_ar: string; }
interface SectionRow {
  id: string; page_id: string; section_key: string; layout_variant: string; is_visible: boolean; display_order: number;
  title_en: string | null; title_ar: string | null;
  subtitle_en: string | null; subtitle_ar: string | null;
  description_en: string | null; description_ar: string | null;
  button_label_en: string | null; button_label_ar: string | null; button_url: string | null;
  image_url: string | null; background_url: string | null;
}

const SortableSection: React.FC<{
  sec: SectionRow;
  expanded: boolean;
  onToggle: () => void;
  onUpdate: (patch: Partial<SectionRow>) => void;
  onSave: () => void;
  onDelete: () => void;
}> = ({ sec, expanded, onToggle, onUpdate, onSave, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: sec.id });
  const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 };

  return (
    <Card ref={setNodeRef} style={style} className="p-0 overflow-hidden">
      <div className="flex items-center gap-3 p-4 border-b bg-secondary/40">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1 hover:bg-background rounded"
          title="Drag to reorder"
        >
          <GripVertical className="w-5 h-5 text-muted-foreground" />
        </button>
        <button onClick={onToggle} className="flex items-center gap-2 flex-1 text-left">
          {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <div>
            <h3 className="font-semibold capitalize">{sec.section_key}</h3>
            <p className="text-xs text-muted-foreground">{sec.title_en || sec.title_ar || '—'}</p>
          </div>
        </button>
        <div className="flex items-center gap-2">
          {sec.is_visible ? <Eye className="w-4 h-4 text-emerald-500" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
          <Switch checked={sec.is_visible} onCheckedChange={(v) => onUpdate({ is_visible: v })} />
        </div>
        <Select value={sec.layout_variant} onValueChange={(v) => onUpdate({ layout_variant: v })}>
          <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="design-1">Design 1</SelectItem>
            <SelectItem value="design-2">Design 2</SelectItem>
            <SelectItem value="design-3">Design 3</SelectItem>
          </SelectContent>
        </Select>
        <Button size="sm" onClick={onSave}><Save className="w-4 h-4" /></Button>
        <Button size="sm" variant="outline" onClick={onDelete}><Trash2 className="w-4 h-4 text-destructive" /></Button>
      </div>

      {expanded && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Section Key</Label>
            <Input value={sec.section_key} onChange={(e) => onUpdate({ section_key: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Order</Label>
            <Input type="number" value={sec.display_order} onChange={(e) => onUpdate({ display_order: Number(e.target.value) })} />
          </div>

          <div className="space-y-2">
            <Label>Title (EN)</Label>
            <Input value={sec.title_en ?? ''} onChange={(e) => onUpdate({ title_en: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Title (AR)</Label>
            <Input dir="rtl" value={sec.title_ar ?? ''} onChange={(e) => onUpdate({ title_ar: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Subtitle (EN)</Label>
            <Input value={sec.subtitle_en ?? ''} onChange={(e) => onUpdate({ subtitle_en: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Subtitle (AR)</Label>
            <Input dir="rtl" value={sec.subtitle_ar ?? ''} onChange={(e) => onUpdate({ subtitle_ar: e.target.value })} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Description (EN)</Label>
            <Textarea rows={3} value={sec.description_en ?? ''} onChange={(e) => onUpdate({ description_en: e.target.value })} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Description (AR)</Label>
            <Textarea rows={3} dir="rtl" value={sec.description_ar ?? ''} onChange={(e) => onUpdate({ description_ar: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Button Label (EN)</Label>
            <Input value={sec.button_label_en ?? ''} onChange={(e) => onUpdate({ button_label_en: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Button Label (AR)</Label>
            <Input dir="rtl" value={sec.button_label_ar ?? ''} onChange={(e) => onUpdate({ button_label_ar: e.target.value })} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Button URL</Label>
            <Input value={sec.button_url ?? ''} onChange={(e) => onUpdate({ button_url: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Image</Label>
            <MediaPicker value={sec.image_url} onChange={(url) => onUpdate({ image_url: url })} label="Image" />
          </div>
          <div className="space-y-2">
            <Label>Background Image</Label>
            <MediaPicker value={sec.background_url} onChange={(url) => onUpdate({ background_url: url })} label="Background" />
          </div>
        </div>
      )}
    </Card>
  );
};

const PagesAdmin: React.FC = () => {
  const [pages, setPages] = useState<PageRow[]>([]);
  const [activePageId, setActivePageId] = useState<string | null>(null);
  const [sections, setSections] = useState<SectionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  useEffect(() => {
    supabase.from('pages').select('id, slug, title_en, title_ar').order('display_order').then(({ data }) => {
      setPages(data ?? []);
      if (data?.[0]) setActivePageId(data[0].id);
      setLoading(false);
    });
  }, []);

  const loadSections = (pageId: string) => {
    supabase.from('sections').select('*').eq('page_id', pageId).order('display_order')
      .then(({ data }) => setSections((data as SectionRow[]) ?? []));
  };

  useEffect(() => {
    if (activePageId) loadSections(activePageId);
  }, [activePageId]);

  const updateSection = (id: string, patch: Partial<SectionRow>) => {
    setSections((s) => s.map((sec) => (sec.id === id ? { ...sec, ...patch } : sec)));
  };

  const saveSection = async (sec: SectionRow) => {
    const { id, page_id, ...rest } = sec;
    const { error } = await supabase.from('sections').update(rest).eq('id', id);
    if (error) toast.error(error.message); else toast.success('Saved');
  };

  const deleteSection = async (id: string) => {
    if (!confirm('Delete this section?')) return;
    const { error } = await supabase.from('sections').delete().eq('id', id);
    if (error) return toast.error(error.message);
    toast.success('Deleted');
    if (activePageId) loadSections(activePageId);
  };

  const addSection = async () => {
    if (!activePageId) return;
    const order = sections.length > 0 ? Math.max(...sections.map((s) => s.display_order)) + 1 : 0;
    const { error } = await supabase.from('sections').insert({
      page_id: activePageId, section_key: 'new-section', layout_variant: 'design-1',
      title_en: 'New Section', title_ar: 'قسم جديد', display_order: order, is_visible: true,
    });
    if (error) return toast.error(error.message);
    toast.success('Section added');
    loadSections(activePageId);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = sections.findIndex((s) => s.id === active.id);
    const newIndex = sections.findIndex((s) => s.id === over.id);
    const reordered = arrayMove(sections, oldIndex, newIndex).map((s, i) => ({ ...s, display_order: i }));
    setSections(reordered);
    // Persist new order
    const updates = reordered.map((s) =>
      supabase.from('sections').update({ display_order: s.display_order }).eq('id', s.id)
    );
    await Promise.all(updates);
    toast.success('Order saved');
  };

  if (loading) return <Loader2 className="w-6 h-6 animate-spin" />;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Pages & Sections</h1>
          <p className="text-sm text-muted-foreground mt-1">Drag sections to reorder. All edits push to the live site instantly.</p>
        </div>
        <Button onClick={addSection}><Plus className="w-4 h-4 mr-1" />Add Section</Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {pages.map((p) => (
          <Button key={p.id} variant={activePageId === p.id ? 'default' : 'outline'}
            size="sm" onClick={() => setActivePageId(p.id)}>
            {p.title_en} <span className="opacity-50 ml-2">/{p.slug}</span>
          </Button>
        ))}
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {sections.length === 0 && (
              <Card className="p-8 text-center text-muted-foreground">
                No sections yet. Click "Add Section" to start.
              </Card>
            )}
            {sections.map((sec) => (
              <SortableSection
                key={sec.id}
                sec={sec}
                expanded={expandedId === sec.id}
                onToggle={() => setExpandedId(expandedId === sec.id ? null : sec.id)}
                onUpdate={(patch) => updateSection(sec.id, patch)}
                onSave={() => saveSection(sec)}
                onDelete={() => deleteSection(sec.id)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default PagesAdmin;
