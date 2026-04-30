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
  titleField: string;
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
    toast.success('تم الحفظ'); setOpen(false); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm('حذف هذا العنصر؟')) return;
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) toast.error(error.message); else { toast.success('تم الحذف'); load(); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditing({ is_published: true, display_order: 0, ...defaults })}>
              <Plus className="w-4 h-4 mr-1" />جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editing?.id ? 'تعديل' : 'إضافة جديد'}</DialogTitle></DialogHeader>
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
                <Button className="md:col-span-2" onClick={save}>حفظ</Button>
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
            {items.length === 0 && <p className="text-center py-8 text-muted-foreground">لا توجد عناصر بعد.</p>}
          </div>
        </Card>
      )}
    </div>
  );
};

export const NewsAdmin = () => <SimpleCRUD
  title="الأخبار" table="news_articles" titleField="title_ar" imageField="image_url"
  fields={[
    { key: 'title_en', label: 'العنوان (EN)' },
    { key: 'title_ar', label: 'العنوان (AR)', dir: 'rtl' },
    { key: 'slug', label: 'المعرّف (Slug)' },
    { key: 'published_date', label: 'التاريخ', type: 'date' },
    { key: 'image_url', label: 'رابط الصورة', fullWidth: true },
    { key: 'excerpt_en', label: 'المقتطف (EN)', type: 'textarea', fullWidth: true },
    { key: 'excerpt_ar', label: 'المقتطف (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'content_en', label: 'المحتوى (EN)', type: 'textarea', fullWidth: true },
    { key: 'content_ar', label: 'المحتوى (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'is_published', label: 'منشور', type: 'switch' },
  ]}
/>;

export const VideosAdmin = () => <SimpleCRUD
  title="الفيديوهات" table="videos" titleField="title_ar" imageField="thumbnail_url"
  fields={[
    { key: 'title_en', label: 'العنوان (EN)' },
    { key: 'title_ar', label: 'العنوان (AR)', dir: 'rtl' },
    { key: 'video_url', label: 'رابط الفيديو', fullWidth: true },
    { key: 'thumbnail_url', label: 'رابط الصورة المصغرة', fullWidth: true },
    { key: 'description_en', label: 'الوصف (EN)', type: 'textarea', fullWidth: true },
    { key: 'description_ar', label: 'الوصف (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'published_date', label: 'التاريخ', type: 'date' },
    { key: 'is_published', label: 'منشور', type: 'switch' },
  ]}
/>;

export const HospitalsAdmin = () => <SimpleCRUD
  title="الدليل الطبي" table="hospitals" titleField="name_ar" imageField="logo_url"
  fields={[
    { key: 'name_en', label: 'الاسم (EN)' },
    { key: 'name_ar', label: 'الاسم (AR)', dir: 'rtl' },
    { key: 'type_en', label: 'النوع (EN)' },
    { key: 'type_ar', label: 'النوع (AR)', dir: 'rtl' },
    { key: 'phone', label: 'الهاتف' },
    { key: 'email', label: 'البريد الإلكتروني' },
    { key: 'logo_url', label: 'رابط الشعار', fullWidth: true },
    { key: 'address_en', label: 'العنوان (EN)', type: 'textarea', fullWidth: true },
    { key: 'address_ar', label: 'العنوان (AR)', type: 'textarea', dir: 'rtl', fullWidth: true },
    { key: 'is_published', label: 'منشور', type: 'switch' },
  ]}
/>;

export default SimpleCRUD;
