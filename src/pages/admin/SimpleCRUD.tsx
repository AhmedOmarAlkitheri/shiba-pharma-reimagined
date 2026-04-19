// Generic CRUD admin for simple tables (news, videos, hospitals)
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface FieldDef {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'url' | 'date' | 'switch';
  dir?: 'rtl';
  fullWidth?: boolean;
}

interface Props {
  title: string;
  table: 'news_articles' | 'videos' | 'hospitals';
  titleField: string; // e.g. 'title_en' or 'name_en'
  imageField?: string;
  fields: FieldDef[];
  defaults?: Record<string, any>;
}

const SimpleCRUD: React.FC<Props> = ({ title, table, titleField, imageField, fields, defaults = {} }) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from(table).select('*').order('display_order', { ascending: true });
    setItems(data ?? []); setLoading(false);
  };
  useEffect(() => { load(); }, [table]);

  const save = async () => {
    const payload = { ...editing };
    delete payload.created_at; delete payload.updated_at;
    let error;
    if (editing.id) {
      const { id, ...rest } = payload;
      ({ error } = await supabase.from(table).update(rest).eq('id', id));
    } else {
      ({ error } = await supabase.from(table).insert(payload));
    }
    if (error) return toast.error(error.message);
    toast.success('Saved'); setOpen(false); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this item?')) return;
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) toast.error(error.message); else { toast.success('Deleted'); load(); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditing({ is_published: true, display_order: 0, ...defaults })}>
              <Plus className="w-4 h-4 mr-1" />New
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editing?.id ? 'Edit' : 'New'}</DialogTitle></DialogHeader>
            {editing && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map(f => (
                  <div key={f.key} className={`space-y-2 ${f.fullWidth ? 'md:col-span-2' : ''}`}>
                    <Label>{f.label}</Label>
                    {f.type === 'textarea' ? (
                      <Textarea rows={3} dir={f.dir} value={editing[f.key] ?? ''} onChange={e => setEditing({ ...editing, [f.key]: e.target.value })} />
                    ) : f.type === 'switch' ? (
                      <Switch checked={!!editing[f.key]} onCheckedChange={v => setEditing({ ...editing, [f.key]: v })} />
                    ) : (
                      <Input type={f.type === 'date' ? 'date' : 'text'} dir={f.dir} value={editing[f.key] ?? ''} onChange={e => setEditing({ ...editing, [f.key]: e.target.value })} />
                    )}
                  </div>
                ))}
                <Button className="md:col-span-2" onClick={save}>Save</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <Card className="p-4">
          <div className="space-y-2">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                {imageField && item[imageField] && (
                  <img src={item[imageField]} alt="" className="w-12 h-12 object-cover rounded bg-secondary" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item[titleField]}</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => { setEditing(item); setOpen(true); }}><Pencil className="w-3 h-3" /></Button>
                <Button size="sm" variant="outline" onClick={() => remove(item.id)}><Trash2 className="w-3 h-3" /></Button>
              </div>
            ))}
            {items.length === 0 && <p className="text-center py-8 text-muted-foreground">No items yet.</p>}
          </div>
        </Card>
      )}
    </div>
  );
};

export const NewsAdmin = () => <SimpleCRUD
  title="News Articles" table="news_articles" titleField="title_en" imageField="image_url"
  fields={[
    { key: 'title_en', label: 'Title (EN)' },
    { key: 'title_ar', label: 'Title (AR)', dir: 'rtl' },
    { key: 'slug', label: 'Slug' },
    { key: 'published_date', label: 'Date', type: 'date' },
    { key: 'image_url', label: 'Image URL', fullWidth: true },
    { key: 'excerpt_en', label: 'Excerpt (EN)', type: 'textarea', fullWidth: true },
    { key: 'excerpt_ar', label: 'Excerpt (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'content_en', label: 'Content (EN)', type: 'textarea', fullWidth: true },
    { key: 'content_ar', label: 'Content (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'is_published', label: 'Published', type: 'switch' },
  ]}
/>;

export const VideosAdmin = () => <SimpleCRUD
  title="Videos" table="videos" titleField="title_en" imageField="thumbnail_url"
  fields={[
    { key: 'title_en', label: 'Title (EN)' },
    { key: 'title_ar', label: 'Title (AR)', dir: 'rtl' },
    { key: 'video_url', label: 'Video URL', fullWidth: true },
    { key: 'thumbnail_url', label: 'Thumbnail URL', fullWidth: true },
    { key: 'description_en', label: 'Description (EN)', type: 'textarea', fullWidth: true },
    { key: 'description_ar', label: 'Description (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'published_date', label: 'Date', type: 'date' },
    { key: 'is_published', label: 'Published', type: 'switch' },
  ]}
/>;

export const HospitalsAdmin = () => <SimpleCRUD
  title="Medical Directory" table="hospitals" titleField="name_en" imageField="logo_url"
  fields={[
    { key: 'name_en', label: 'Name (EN)' },
    { key: 'name_ar', label: 'Name (AR)', dir: 'rtl' },
    { key: 'type_en', label: 'Type (EN)' },
    { key: 'type_ar', label: 'Type (AR)', dir: 'rtl' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'logo_url', label: 'Logo URL', fullWidth: true },
    { key: 'address_en', label: 'Address (EN)', type: 'textarea', fullWidth: true },
    { key: 'address_ar', label: 'Address (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'is_published', label: 'Published', type: 'switch' },
  ]}
/>;

export default SimpleCRUD;
