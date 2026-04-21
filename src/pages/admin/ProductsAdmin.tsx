import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Loader2, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import MediaPicker from '@/components/admin/MediaPicker';

interface Category { id: string; name_en: string; }
interface Product {
  id?: string; slug: string; name: string; image_url: string | null; category_id: string | null;
  description_en: string | null; description_ar: string | null;
  composition_en: string | null; composition_ar: string | null;
  indication_en: string | null; indication_ar: string | null;
  dosage_en: string | null; dosage_ar: string | null;
  side_effects_en: string | null; side_effects_ar: string | null;
  contraindications_en: string | null; contraindications_ar: string | null;
  storage_en: string | null; storage_ar: string | null;
  packaging_en: string | null; packaging_ar: string | null;
  is_published: boolean; is_featured: boolean; display_order: number;
}

const blank: Product = {
  slug: '', name: '', image_url: null, category_id: null,
  description_en: '', description_ar: '', composition_en: '', composition_ar: '',
  indication_en: '', indication_ar: '', dosage_en: '', dosage_ar: '',
  side_effects_en: '', side_effects_ar: '', contraindications_en: '', contraindications_ar: '',
  storage_en: '', storage_ar: '', packaging_en: '', packaging_ar: '',
  is_published: true, is_featured: false, display_order: 0,
};

const ProductsAdmin: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const load = async () => {
    setLoading(true);
    const [{ data: prods }, { data: cats }] = await Promise.all([
      supabase.from('products').select('*').order('display_order'),
      supabase.from('product_categories').select('id, name_en').order('display_order'),
    ]);
    setProducts(prods ?? []);
    setCategories(cats ?? []);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing) return;
    if (!editing.name || !editing.slug) return toast.error('Name and slug are required');
    const { id, ...payload } = editing as any;
    delete payload.created_at; delete payload.updated_at;
    const { error } = id
      ? await supabase.from('products').update(payload).eq('id', id)
      : await supabase.from('products').insert(payload);
    if (error) return toast.error(error.message);
    toast.success('Saved'); setOpen(false); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) toast.error(error.message); else { toast.success('Deleted'); load(); }
  };

  const filtered = products.filter((p) =>
    !search || p.name?.toLowerCase().includes(search.toLowerCase()) || p.slug?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditing({ ...blank })}><Plus className="w-4 h-4 mr-1" />New Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing?.id ? 'Edit Product' : 'New Product'}</DialogTitle>
            </DialogHeader>
            {editing && (
              <Tabs defaultValue="basic">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="medical">Medical</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                  <TabsTrigger value="meta">Meta</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Name *</Label>
                      <Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Slug *</Label>
                      <Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Category</Label>
                      <Select
                        value={editing.category_id ?? 'none'}
                        onValueChange={(v) => setEditing({ ...editing, category_id: v === 'none' ? null : v })}
                      >
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">— None —</SelectItem>
                          {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name_en}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Image</Label>
                      <MediaPicker value={editing.image_url} onChange={(url) => setEditing({ ...editing, image_url: url })} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Description (EN)</Label>
                      <Textarea rows={3} value={editing.description_en ?? ''} onChange={(e) => setEditing({ ...editing, description_en: e.target.value })} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Description (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.description_ar ?? ''} onChange={(e) => setEditing({ ...editing, description_ar: e.target.value })} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="medical" className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Composition (EN)</Label>
                      <Textarea rows={3} value={editing.composition_en ?? ''} onChange={(e) => setEditing({ ...editing, composition_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Composition (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.composition_ar ?? ''} onChange={(e) => setEditing({ ...editing, composition_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Indication (EN)</Label>
                      <Textarea rows={3} value={editing.indication_en ?? ''} onChange={(e) => setEditing({ ...editing, indication_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Indication (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.indication_ar ?? ''} onChange={(e) => setEditing({ ...editing, indication_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Side Effects (EN)</Label>
                      <Textarea rows={3} value={editing.side_effects_en ?? ''} onChange={(e) => setEditing({ ...editing, side_effects_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Side Effects (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.side_effects_ar ?? ''} onChange={(e) => setEditing({ ...editing, side_effects_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Contraindications (EN)</Label>
                      <Textarea rows={3} value={editing.contraindications_en ?? ''} onChange={(e) => setEditing({ ...editing, contraindications_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Contraindications (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.contraindications_ar ?? ''} onChange={(e) => setEditing({ ...editing, contraindications_ar: e.target.value })} /></div>
                  </div>
                </TabsContent>

                <TabsContent value="usage" className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Dosage (EN)</Label>
                      <Textarea rows={3} value={editing.dosage_en ?? ''} onChange={(e) => setEditing({ ...editing, dosage_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Dosage (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.dosage_ar ?? ''} onChange={(e) => setEditing({ ...editing, dosage_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Storage (EN)</Label>
                      <Textarea rows={3} value={editing.storage_en ?? ''} onChange={(e) => setEditing({ ...editing, storage_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Storage (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.storage_ar ?? ''} onChange={(e) => setEditing({ ...editing, storage_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Packaging (EN)</Label>
                      <Input value={editing.packaging_en ?? ''} onChange={(e) => setEditing({ ...editing, packaging_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Packaging (AR)</Label>
                      <Input dir="rtl" value={editing.packaging_ar ?? ''} onChange={(e) => setEditing({ ...editing, packaging_ar: e.target.value })} /></div>
                  </div>
                </TabsContent>

                <TabsContent value="meta" className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Display Order</Label>
                      <Input type="number" value={editing.display_order} onChange={(e) => setEditing({ ...editing, display_order: Number(e.target.value) })} />
                    </div>
                    <div className="flex items-center gap-3 pt-7">
                      <Switch checked={editing.is_published} onCheckedChange={(v) => setEditing({ ...editing, is_published: v })} />
                      <Label>Published</Label>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Switch checked={editing.is_featured} onCheckedChange={(v) => setEditing({ ...editing, is_featured: v })} />
                      <Label>Featured</Label>
                    </div>
                  </div>
                </TabsContent>

                <Button className="w-full mt-4" onClick={save}>Save Product</Button>
              </Tabs>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-4 mb-4">
        <Input placeholder="Search by name or slug..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </Card>

      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <Card className="p-4">
          <div className="space-y-2">
            {filtered.map((p) => (
              <div key={p.id} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-secondary/30 transition-colors">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.name} className="w-14 h-14 object-cover rounded bg-secondary" />
                ) : (
                  <div className="w-14 h-14 rounded bg-secondary" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium truncate">{p.name}</p>
                    {p.is_featured && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
                    {!p.is_published && <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">Draft</span>}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">/{p.slug}</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => { setEditing(p); setOpen(true); }}><Pencil className="w-3 h-3" /></Button>
                <Button size="sm" variant="outline" onClick={() => remove(p.id)}><Trash2 className="w-3 h-3 text-destructive" /></Button>
              </div>
            ))}
            {filtered.length === 0 && <p className="text-center py-8 text-muted-foreground">No products found.</p>}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProductsAdmin;
