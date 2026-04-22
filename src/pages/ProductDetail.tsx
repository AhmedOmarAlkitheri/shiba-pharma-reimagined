import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Package, AlertTriangle, Pill, FileText, Thermometer, Box,
  Share2, Heart, ChevronRight, Shield, Droplets, CheckCircle2, Loader2,
  AlertCircle, Baby, Activity,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('composition');
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    (async () => {
      // Try by slug first, then by id
      const { data: bySlug } = await supabase.from('products').select('*, product_categories(name_en, name_ar)').eq('slug', id).maybeSingle();
      let p = bySlug;
      if (!p) {
        const { data } = await supabase.from('products').select('*, product_categories(name_en, name_ar)').eq('id', id).maybeSingle();
        p = data;
      }
      setProduct(p);
      if (p?.category_id) {
        const { data: rel } = await supabase.from('products')
          .select('id, name, slug, image_url, product_categories(name_en, name_ar)')
          .eq('category_id', p.category_id).eq('is_published', true).neq('id', p.id).limit(4);
        setRelated(rel ?? []);
      }
      setLoading(false);
    })();
  }, [id]);

  const localized = (en: string | null, ar: string | null) =>
    language === 'ar' ? (ar || en || '') : (en || ar || '');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section-container py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary mb-4">
              {t({ en: 'Product Not Found', ar: 'المنتج غير موجود' })}
            </h1>
            <Link to="/products">
              <Button>{t({ en: 'Back to Products', ar: 'العودة للمنتجات' })}</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const infoSections = [
    { key: 'composition', icon: Pill, label: { en: 'Composition', ar: 'التركيب' }, content: localized(product.composition_en, product.composition_ar), color: 'from-blue-500 to-cyan-500' },
    { key: 'indication', icon: FileText, label: { en: 'Indication', ar: 'دواعي الاستعمال' }, content: localized(product.indication_en, product.indication_ar), color: 'from-green-500 to-emerald-500' },
    { key: 'dosage', icon: Droplets, label: { en: 'Dosage', ar: 'الجرعة' }, content: localized(product.dosage_en, product.dosage_ar), color: 'from-purple-500 to-violet-500' },
    { key: 'side_effects', icon: AlertTriangle, label: { en: 'Side Effects', ar: 'الآثار الجانبية' }, content: localized(product.side_effects_en, product.side_effects_ar), color: 'from-orange-500 to-amber-500' },
    { key: 'contraindications', icon: Shield, label: { en: 'Contraindications', ar: 'موانع الاستعمال' }, content: localized(product.contraindications_en, product.contraindications_ar), color: 'from-red-500 to-rose-500' },
    { key: 'warnings', icon: AlertCircle, label: { en: 'Warnings', ar: 'التحذيرات' }, content: localized(product.warnings_en, product.warnings_ar), color: 'from-yellow-500 to-orange-500' },
    { key: 'interactions', icon: Activity, label: { en: 'Drug Interactions', ar: 'التداخلات الدوائية' }, content: localized(product.interactions_en, product.interactions_ar), color: 'from-pink-500 to-rose-500' },
    { key: 'pregnancy', icon: Baby, label: { en: 'Pregnancy & Lactation', ar: 'الحمل والإرضاع' }, content: localized(product.pregnancy_en, product.pregnancy_ar), color: 'from-fuchsia-500 to-purple-500' },
    { key: 'overdose', icon: AlertTriangle, label: { en: 'Overdose', ar: 'الجرعة الزائدة' }, content: localized(product.overdose_en, product.overdose_ar), color: 'from-red-600 to-orange-600' },
    { key: 'storage', icon: Thermometer, label: { en: 'Storage', ar: 'التخزين' }, content: localized(product.storage_en, product.storage_ar), color: 'from-teal-500 to-cyan-500' },
    { key: 'packaging', icon: Box, label: { en: 'Packaging', ar: 'التعبئة' }, content: localized(product.packaging_en, product.packaging_ar), color: 'from-indigo-500 to-blue-500' },
  ].filter((s) => s.content);

  const activeSection = infoSections.find((s) => s.key === activeTab) || infoSections[0];
  const features = (language === 'ar' ? product.features_ar : product.features_en) ?? [];
  const specs = Array.isArray(product.specifications) ? product.specifications : [];
  const gallery: string[] = product.gallery_urls ?? [];
  const certs: string[] = product.certifications ?? [];
  const categoryName = product.product_categories
    ? localized(product.product_categories.name_en, product.product_categories.name_ar) : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Header />
      <main>
        <div className="bg-secondary/30 border-b border-border/50">
          <div className="section-container py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                {t({ en: 'Home', ar: 'الرئيسية' })}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link to="/products" className="text-muted-foreground hover:text-primary">
                {t({ en: 'Products', ar: 'المنتجات' })}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-primary font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <section className="py-12 md:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: isRTL ? 50 : -50 }} animate={{ opacity: 1, x: 0 }}>
                <div className="relative bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-border/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                  {categoryName && (
                    <Badge className="absolute top-4 left-4 bg-primary/10 text-primary border-none">{categoryName}</Badge>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="outline" className={`bg-white/90 ${isFavorite ? 'text-accent' : ''}`} onClick={() => setIsFavorite(!isFavorite)}>
                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                    </Button>
                    <Button size="icon" variant="outline" className="bg-white/90"><Share2 className="w-4 h-4" /></Button>
                  </div>
                  <div className="relative aspect-square mt-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl" />
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="relative z-10 w-full h-full object-contain p-8" />
                    ) : (
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <Package className="w-24 h-24 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  {certs.length > 0 && (
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2">
                      {certs.map((c, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-primary/10 rounded-full py-1.5 px-3">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-medium text-primary">{c}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {gallery.length > 0 && (
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {gallery.map((g, i) => (
                      <div key={i} className="aspect-square bg-white rounded-xl border border-border/50 p-2 hover:shadow-md transition-shadow">
                        <img src={g} alt="" className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              <motion.div initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{product.name}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {localized(product.description_en, product.description_ar)}
                  </p>
                </div>

                {(localized(product.composition_en, product.composition_ar) || localized(product.packaging_en, product.packaging_ar)) && (
                  <div className="grid grid-cols-2 gap-4">
                    {localized(product.composition_en, product.composition_ar) && (
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/10">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3"><Pill className="w-6 h-6 text-primary" /></div>
                        <h4 className="font-semibold text-sm mb-1">{t({ en: 'Composition', ar: 'التركيب' })}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-3">{localized(product.composition_en, product.composition_ar)}</p>
                      </div>
                    )}
                    {localized(product.packaging_en, product.packaging_ar) && (
                      <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-5 border border-accent/10">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3"><Box className="w-6 h-6 text-accent" /></div>
                        <h4 className="font-semibold text-sm mb-1">{t({ en: 'Packaging', ar: 'التعبئة' })}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-3">{localized(product.packaging_en, product.packaging_ar)}</p>
                      </div>
                    )}
                  </div>
                )}

                {features.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">{t({ en: 'Key Features', ar: 'الميزات الرئيسية' })}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 bg-secondary/40 rounded-lg p-3">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {specs.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">{t({ en: 'Specifications', ar: 'المواصفات' })}</h3>
                    <div className="bg-white rounded-xl border border-border/50 divide-y">
                      {specs.map((s: any, i: number) => (
                        <div key={i} className="flex justify-between p-3 text-sm">
                          <span className="text-muted-foreground">{language === 'ar' ? s.label_ar : s.label_en}</span>
                          <span className="font-medium">{language === 'ar' ? s.value_ar : s.value_en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link to="/products">
                  <Button variant="outline" className="gap-2 rounded-xl border-2">
                    <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    {t({ en: 'Back to Products', ar: 'العودة للمنتجات' })}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {infoSections.length > 0 && (
          <section className="py-16 bg-secondary/20">
            <div className="section-container">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  {t({ en: 'Product Information', ar: 'معلومات المنتج' })}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                {infoSections.map((s) => (
                  <button key={s.key} onClick={() => setActiveTab(s.key)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      activeTab === s.key ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'bg-white text-muted-foreground hover:bg-secondary border border-border/50'
                    }`}>
                    <s.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{t(s.label)}</span>
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <Card className="bg-white border-none shadow-xl rounded-3xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`h-2 bg-gradient-to-r ${activeSection.color}`} />
                      <div className="p-8 md:p-12">
                        <div className="flex items-start gap-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeSection.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <activeSection.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary mb-4">{t(activeSection.label)}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{activeSection.content}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="py-20">
            <div className="section-container">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                {t({ en: 'Related Products', ar: 'منتجات ذات صلة' })}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((r) => (
                  <Link key={r.id} to={`/products/${r.slug || r.id}`}>
                    <div className="group bg-white rounded-2xl p-4 shadow-soft hover:shadow-xl transition-all border border-border/50 hover:border-primary/20 h-full">
                      <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-xl overflow-hidden mb-4">
                        {r.image_url ? (
                          <img src={r.image_url} alt={r.name} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center"><Package className="w-12 h-12 text-muted-foreground/30" /></div>
                        )}
                      </div>
                      <h3 className="font-bold group-hover:text-primary transition-colors text-center text-sm">{r.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
