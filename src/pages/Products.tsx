import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { uiTranslations } from '@/data/siteData';
import { useDbList } from '@/hooks/useSiteContent';

interface DbProduct {
  id: string; slug: string; name: string; image_url: string | null;
  category_id: string | null; description_en: string | null; description_ar: string | null;
  is_published: boolean;
}
interface DbCategory { id: string; name_en: string; name_ar: string; slug: string; display_order: number; }

const Products: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { items: products, loading: loadingProducts } = useDbList<DbProduct>('products', { order: 'display_order' });
  const { items: categories, loading: loadingCats } = useDbList<DbCategory>('product_categories', { order: 'display_order' });

  const published = useMemo(() => products.filter((p) => p.is_published), [products]);

  const filteredProducts = useMemo(
    () =>
      published.filter((p) => {
        const matchesSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || p.category_id === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    [published, searchTerm, selectedCategory]
  );

  const catName = (c: DbCategory) => (language === 'ar' ? c.name_ar : c.name_en);
  const catCount = (id: string) => published.filter((p) => p.category_id === id).length;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title={uiTranslations.sections.ourProducts}
          breadcrumbs={[{ label: uiTranslations.sections.ourProducts }]}
        />

        <section className="py-8 bg-secondary/30 sticky top-0 z-40 backdrop-blur-xl">
          <div className="section-container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder={t(uiTranslations.common.search)}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  {t({ en: 'All', ar: 'الكل' })}
                </Button>
                {categories.map((c) => (
                  <Button
                    key={c.id}
                    variant={selectedCategory === c.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(c.id)}
                  >
                    {catName(c)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <Badge variant="secondary">
                {t({ en: `Showing ${filteredProducts.length} products`, ar: `عرض ${filteredProducts.length} منتج` })}
              </Badge>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="section-container">
            {loadingProducts ? (
              <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory || 'all'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.03, 0.5) }}
                    >
                      <Link to={`/products/${product.slug || product.id}`}>
                        <Card variant="elevated" className="h-full group cursor-pointer overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative aspect-square bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden">
                              {product.image_url ? (
                                <img
                                  src={product.image_url}
                                  alt={product.name}
                                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                                  {product.name}
                                </div>
                              )}
                              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-strong">
                                  <ExternalLink className="w-5 h-5 text-primary" />
                                </div>
                              </div>
                            </div>

                            <div className="p-4 text-center">
                              <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                                {product.name}
                              </h3>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}

            {!loadingProducts && filteredProducts.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {t({ en: 'No products found', ar: 'لم يتم العثور على منتجات' })}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {!loadingCats && categories.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {t({ en: 'Product Categories', ar: 'فئات المنتجات' })}
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-shadow cursor-pointer group"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="text-2xl font-bold text-accent mb-2">{catCount(category.id)}+</div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {catName(category)}
                    </h3>
                  </motion.div>
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

export default Products;
