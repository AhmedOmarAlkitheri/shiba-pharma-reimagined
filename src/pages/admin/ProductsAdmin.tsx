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
import { Plus, Pencil, Trash2, Loader2, Star, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import MediaPicker from '@/components/admin/MediaPicker';

interface Category { id: string; name_en: string; }
interface Spec { label_en: string; label_ar: string; value_en: string; value_ar: string; }
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
  warnings_en: string | null; warnings_ar: string | null;
  interactions_en: string | null; interactions_ar: string | null;
  pregnancy_en: string | null; pregnancy_ar: string | null;
  overdose_en: string | null; overdose_ar: string | null;
  features_en: string[] | null; features_ar: string[] | null;
  specifications: Spec[] | null;
  gallery_urls: string[] | null;
  certifications: string[] | null;
  is_published: boolean; is_featured: boolean; display_order: number;
}

const blank: Product = {
  slug: '', name: '', image_url: null, category_id: null,
  description_en: '', description_ar: '', composition_en: '', composition_ar: '',
  indication_en: '', indication_ar: '', dosage_en: '', dosage_ar: '',
  side_effects_en: '', side_effects_ar: '', contraindications_en: '', contraindications_ar: '',
  storage_en: '', storage_ar: '', packaging_en: '', packaging_ar: '',
  warnings_en: '', warnings_ar: '', interactions_en: '', interactions_ar: '',
  pregnancy_en: '', pregnancy_ar: '', overdose_en: '', overdose_ar: '',
  features_en: [], features_ar: [], specifications: [], gallery_urls: [], certifications: [],
  is_published: true, is_featured: false, display_order: 0,
};

const ListEditor: React.FC<{ items: string[]; onChange: (v: string[]) => void; placeholder?: string; rtl?: boolean }> =
  ({ items, onChange, placeholder, rtl }) => {
    const [draft, setDraft] = useState('');
    return (
      <div className="space-y-2">
        <div className="flex gap-2">
          <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={placeholder} dir={rtl ? 'rtl' : 'ltr'} />
          <Button type="button" size="sm" onClick={() => { if (draft.trim()) { onChange([...items, draft.trim()]); setDraft(''); } }}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-1">
          {items.map((it, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-secondary rounded-md text-xs">
              {it}
              <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))}>
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>
    );
  };

const SpecsEditor: React.FC<{ specs: Spec[]; onChange: (v: Spec[]) => void }> = ({ specs, onChange }) => {
  const update = (i: number, patch: Partial<Spec>) =>
    onChange(specs.map((s, j) => (i === j ? { ...s, ...patch } : s)));
  return (
    <div className="space-y-2">
      {specs.map((s, i) => (
        <div key={i} className="grid grid-cols-2 gap-2 p-2 border rounded-lg">
          <Input value={s.label_en} placeholder="Label (EN)" onChange={(e) => update(i, { label_en: e.target.value })} />
          <Input value={s.label_ar} placeholder="Label (AR)" dir="rtl" onChange={(e) => update(i, { label_ar: e.target.value })} />
          <Input value={s.value_en} placeholder="Value (EN)" onChange={(e) => update(i, { value_en: e.target.value })} />
          <Input value={s.value_ar} placeholder="Value (AR)" dir="rtl" onChange={(e) => update(i, { value_ar: e.target.value })} />
          <Button type="button" size="sm" variant="outline" className="col-span-2"
            onClick={() => onChange(specs.filter((_, j) => j !== i))}>Remove</Button>
        </div>
      ))}
      <Button type="button" size="sm" variant="outline" onClick={() => onChange([...specs, { label_en: '', label_ar: '', value_en: '', value_ar: '' }])}>
        <Plus className="w-4 h-4 mr-1" /> Add Specification
      </Button>
    </div>
  );
};

const GalleryEditor: React.FC<{ urls: string[]; onChange: (v: string[]) => void }> = ({ urls, onChange }) => (
  <div className="space-y-2">
    {urls.map((u, i) => (
      <div key={i} className="flex items-center gap-2">
        <img src={u} alt="" className="w-12 h-12 object-cover rounded" />
        <Input value={u} onChange={(e) => onChange(urls.map((x, j) => (i === j ? e.target.value : x)))} />
        <Button type="button" size="sm" variant="outline" onClick={() => onChange(urls.filter((_, j) => j !== i))}>
          <X className="w-4 h-4" />
        </Button>
      </div>
    ))}
    <MediaPicker value={null} onChange={(url) => url && onChange([...urls, url])} label="Add image" />
  </div>
);

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

  const openEdit = (p: any) => {
    setEditing({
      ...blank, ...p,
      features_en: p.features_en ?? [], features_ar: p.features_ar ?? [],
      specifications: Array.isArray(p.specifications) ? p.specifications : [],
      gallery_urls: p.gallery_urls ?? [], certifications: p.certifications ?? [],
    });
    setOpen(true);
  };

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
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground mt-1">Full management of every product field shown on the site.</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditing({ ...blank }); }}><Plus className="w-4 h-4 mr-1" />New Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing?.id ? 'Edit Product' : 'New Product'}</DialogTitle>
            </DialogHeader>
            {editing && (
              <Tabs defaultValue="basic">
                <TabsList className="grid grid-cols-6 w-full">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="medical">Medical</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                  <TabsTrigger value="safety">Safety</TabsTrigger>
                  <TabsTrigger value="features">Features & Specs</TabsTrigger>
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
                      <Select value={editing.category_id ?? 'none'}
                        onValueChange={(v) => setEditing({ ...editing, category_id: v === 'none' ? null : v })}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">— None —</SelectItem>
                          {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name_en}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Main Image</Label>
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

                <TabsContent value="safety" className="space-y-4 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Side Effects (EN)</Label>
                      <Textarea rows={3} value={editing.side_effects_en ?? ''} onChange={(e) => setEditing({ ...editing, side_effects_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Side Effects (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.side_effects_ar ?? ''} onChange={(e) => setEditing({ ...editing, side_effects_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Contraindications (EN)</Label>
                      <Textarea rows={3} value={editing.contraindications_en ?? ''} onChange={(e) => setEditing({ ...editing, contraindications_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Contraindications (AR)</Label>
                      <Textarea rows={3} dir="rtl" value={editing.contraindications_ar ?? ''} onChange={(e) => setEditing({ ...editing, contraindications_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Warnings (EN)</Label>
                      <Textarea rows={2} value={editing.warnings_en ?? ''} onChange={(e) => setEditing({ ...editing, warnings_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Warnings (AR)</Label>
                      <Textarea rows={2} dir="rtl" value={editing.warnings_ar ?? ''} onChange={(e) => setEditing({ ...editing, warnings_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Drug Interactions (EN)</Label>
                      <Textarea rows={2} value={editing.interactions_en ?? ''} onChange={(e) => setEditing({ ...editing, interactions_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Drug Interactions (AR)</Label>
                      <Textarea rows={2} dir="rtl" value={editing.interactions_ar ?? ''} onChange={(e) => setEditing({ ...editing, interactions_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Pregnancy & Lactation (EN)</Label>
                      <Textarea rows={2} value={editing.pregnancy_en ?? ''} onChange={(e) => setEditing({ ...editing, pregnancy_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Pregnancy & Lactation (AR)</Label>
                      <Textarea rows={2} dir="rtl" value={editing.pregnancy_ar ?? ''} onChange={(e) => setEditing({ ...editing, pregnancy_ar: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Overdose (EN)</Label>
                      <Textarea rows={2} value={editing.overdose_en ?? ''} onChange={(e) => setEditing({ ...editing, overdose_en: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Overdose (AR)</Label>
                      <Textarea rows={2} dir="rtl" value={editing.overdose_ar ?? ''} onChange={(e) => setEditing({ ...editing, overdose_ar: e.target.value })} /></div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="space-y-6 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Key Features (EN)</Label>
                      <ListEditor items={editing.features_en ?? []} onChange={(v) => setEditing({ ...editing, features_en: v })} placeholder="Add feature..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Key Features (AR)</Label>
                      <ListEditor items={editing.features_ar ?? []} onChange={(v) => setEditing({ ...editing, features_ar: v })} placeholder="أضف ميزة..." rtl />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Specifications</Label>
                    <SpecsEditor specs={editing.specifications ?? []} onChange={(v) => setEditing({ ...editing, specifications: v })} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Certifications</Label>
                      <ListEditor items={editing.certifications ?? []} onChange={(v) => setEditing({ ...editing, certifications: v })} placeholder="WHO-GMP, ISO 9001..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Image Gallery</Label>
                      <GalleryEditor urls={editing.gallery_urls ?? []} onChange={(v) => setEditing({ ...editing, gallery_urls: v })} />
                    </div>
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
                <Button size="sm" variant="outline" onClick={() => openEdit(p)}><Pencil className="w-3 h-3" /></Button>
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
