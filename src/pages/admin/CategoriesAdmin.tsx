import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Category {
  id?: string; name_en: string; name_ar: string; slug: string; icon: string | null; display_order: number;
}

const blank: Category = { name_en: '', name_ar: '', slug: '', icon: '', display_order: 0 };

const CategoriesAdmin: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Category | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    const { data } = await supabase.from('product_categories').select('*').order('display_order');
    setItems(data ?? []); setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing) return;
    if (!editing.name_en || !editing.slug) return toast.error('الاسم والمعرّف مطلوبان');
    const { id, ...payload } = editing as any;
    delete payload.created_at; delete payload.updated_at;
    const { error } = id
      ? await supabase.from('product_categories').update(payload).eq('id', id)
      : await supabase.from('product_categories').insert(payload);
    if (error) return toast.error(error.message);
    toast.success('تم الحفظ'); setOpen(false); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm('حذف الفئة؟ المنتجات المرتبطة بها ستصبح بدون فئة.')) return;
    const { error } = await supabase.from('product_categories').delete().eq('id', id);
    if (error) toast.error(error.message); else { toast.success('تم الحذف'); load(); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">فئات المنتجات</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditing({ ...blank })}><Plus className="w-4 h-4 mr-1" />إضافة فئة</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editing?.id ? 'تعديل الفئة' : 'فئة جديدة'}</DialogTitle></DialogHeader>
            {editing && (
              <div className="space-y-4">
                <div className="space-y-2"><Label>الاسم (EN) *</Label>
                  <Input value={editing.name_en} onChange={(e) => setEditing({ ...editing, name_en: e.target.value })} /></div>
                <div className="space-y-2"><Label>الاسم (AR) *</Label>
                  <Input dir="rtl" value={editing.name_ar} onChange={(e) => setEditing({ ...editing, name_ar: e.target.value })} /></div>
                <div className="space-y-2"><Label>المعرّف (Slug) *</Label>
                  <Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></div>
                <div className="space-y-2"><Label>الأيقونة (اسم lucide، اختياري)</Label>
                  <Input value={editing.icon ?? ''} onChange={(e) => setEditing({ ...editing, icon: e.target.value })} placeholder="مثال: Pill" /></div>
                <div className="space-y-2"><Label>الترتيب</Label>
                  <Input type="number" value={editing.display_order} onChange={(e) => setEditing({ ...editing, display_order: Number(e.target.value) })} /></div>
                <Button className="w-full" onClick={save}>حفظ</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <Card className="p-4">
          <div className="space-y-2">
            {items.map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{c.name_ar} <span className="text-muted-foreground text-sm">/ {c.name_en}</span></p>
                  <p className="text-xs text-muted-foreground">/{c.slug} · ترتيب {c.display_order}</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => { setEditing(c); setOpen(true); }}><Pencil className="w-3 h-3" /></Button>
                <Button size="sm" variant="outline" onClick={() => remove(c.id)}><Trash2 className="w-3 h-3 text-destructive" /></Button>
              </div>
            ))}
            {items.length === 0 && <p className="text-center py-8 text-muted-foreground">لا توجد فئات بعد.</p>}
          </div>
        </Card>
      )}
    </div>
  );
};

export default CategoriesAdmin;
