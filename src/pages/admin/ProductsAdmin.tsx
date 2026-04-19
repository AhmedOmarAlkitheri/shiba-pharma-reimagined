import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Category { id: string; name_en: string; }
interface Product {
  id: string; slug: string; name: string; image_url: string | null;
  category_id: string | null; description_en: string | null; description_ar: string | null;
  is_published: boolean; is_featured: boolean;
}

const empty: Partial<Product> = { name: '', slug: '', image_url: '', description_en: '', description_ar: '', is_published: true, is_featured: false };

const ProductsAdmin: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [cats, setCats] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Product> | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);
    const [{ data: p }, { data: c }] = await Promise.all([
      supabase.from('products').select('*').order('display_order'),
      supabase.from('product_categories').select('id, name_en').order('display_order'),
    ]);
    setItems((p as Product[]) ?? []);
    setCats(c ?? []);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing?.name || !editing.slug) { toast.error('Name and slug required'); return; }
    const payload = { ...editing };
    let error;
    if ((editing as Product).id) {
      ({ error } = await supabase.from('products').update(payload).eq('id', (editing as Product).id));
    } else {
      ({ error } = await supabase.from('products').insert(payload as any));
    }
    if (error) return toast.error(error.message);
    toast.success('Saved');
    setOpen(false); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) toast.error(error.message); else { toast.success('Deleted'); load(); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditing(empty)}><Plus className="w-4 h-4 mr-1" />New Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{(editing as any)?.id ? 'Edit' : 'New'} Product</DialogTitle></DialogHeader>
            {editing && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Name *</Label><Input value={editing.name ?? ''} onChange={e => setEditing({ ...editing, name: e.target.value })} /></div>
                <div><Label>Slug *</Label><Input value={editing.slug ?? ''} onChange={e => setEditing({ ...editing, slug: e.target.value })} /></div>
                <div className="md:col-span-2"><Label>Image URL</Label><Input value={editing.image_url ?? ''} onChange={e => setEditing({ ...editing, image_url: e.target.value })} /></div>
                <div className="md:col-span-2">
                  <Label>Category</Label>
                  <Select value={editing.category_id ?? ''} onValueChange={v => setEditing({ ...editing, category_id: v })}>
                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>{cats.map(c => <SelectItem key={c.id} value={c.id}>{c.name_en}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2"><Label>Description (EN)</Label><Textarea rows={3} value={editing.description_en ?? ''} onChange={e => setEditing({ ...editing, description_en: e.target.value })} /></div>
                <div className="md:col-span-2"><Label>Description (AR)</Label><Textarea rows={3} dir="rtl" value={editing.description_ar ?? ''} onChange={e => setEditing({ ...editing, description_ar: e.target.value })} /></div>
                <div className="flex items-center gap-2"><Switch checked={!!editing.is_published} onCheckedChange={v => setEditing({ ...editing, is_published: v })} /><Label>Published</Label></div>
                <div className="flex items-center gap-2"><Switch checked={!!editing.is_featured} onCheckedChange={v => setEditing({ ...editing, is_featured: v })} /><Label>Featured</Label></div>
                <Button className="md:col-span-2" onClick={save}>Save</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(p => (
              <div key={p.id} className="border rounded-lg p-4 flex gap-3">
                {p.image_url && <img src={p.image_url} alt={p.name} className="w-16 h-16 object-contain bg-secondary rounded" />}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{p.slug}</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" onClick={() => { setEditing(p); setOpen(true); }}><Pencil className="w-3 h-3" /></Button>
                    <Button size="sm" variant="outline" onClick={() => remove(p.id)}><Trash2 className="w-3 h-3" /></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProductsAdmin;
