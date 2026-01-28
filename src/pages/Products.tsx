import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Package, Pill, Beaker, Heart, Brain, Stethoscope, Sparkles, Tablets } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { productCategories, uiTranslations } from '@/data/siteData';
import { allProducts } from '@/data/productsData';

const categoryIcons: Record<string, React.ElementType> = {
  'analgesics': Pill,
  'antibiotics': Beaker,
  'anti-histamine': Sparkles,
  'git': Stethoscope,
  'cardiovascular': Heart,
  'cns': Brain,
  'vitamins': Tablets,
  'dermatology': Package,
};

const Products: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={uiTranslations.sections.ourProducts}
          breadcrumbs={[{ label: uiTranslations.sections.ourProducts }]}
        />

        {/* Search and Filter Section */}
        <section className="py-8 bg-secondary/30 sticky top-0 z-40 backdrop-blur-xl">
          <div className="section-container">
            <div className={`flex flex-col md:flex-row gap-4 items-center justify-between ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              {/* Search */}
              <div className={`relative w-full md:w-96 ${isRTL ? 'md:order-2' : ''}`}>
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground`} />
                <Input
                  placeholder={t(uiTranslations.common.search)}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                />
              </div>

              {/* Category Filters */}
              <div className={`flex flex-wrap gap-2 justify-center ${isRTL ? 'md:order-1' : ''}`}>
                <Button
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  {t({ en: 'All', ar: 'الكل' })}
                </Button>
                {productCategories.map(category => {
                  const Icon = categoryIcons[category.id] || Package;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Icon className="w-4 h-4" />
                      {t(category.name)}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <Badge variant="secondary">
                {t({ en: `Showing ${filteredProducts.length} products`, ar: `عرض ${filteredProducts.length} منتج` })}
              </Badge>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="section-container">
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
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link to={`/products/${product.id}`}>
                      <Card variant="elevated" className="h-full group cursor-pointer overflow-hidden">
                        <CardContent className="p-0">
                          {/* Product Image */}
                          <div className="relative aspect-square bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x200?text=${product.name}`;
                              }}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <ExternalLink className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className={`p-4 text-center ${isRTL ? 'text-right' : ''}`}>
                            <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {product.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {t(product.category)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Package className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  {t({ en: 'No products found', ar: 'لم يتم العثور على منتجات' })}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t({ en: 'Product Categories', ar: 'فئات المنتجات' })}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productCategories.map((category, index) => {
                const Icon = categoryIcons[category.id] || Package;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-shadow cursor-pointer group ${isRTL ? 'text-right' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`flex justify-center mb-3 ${isRTL ? 'justify-end' : ''}`}>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-accent mb-2">{category.productCount}+</div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {t(category.name)}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
