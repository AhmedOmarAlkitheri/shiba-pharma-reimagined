import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, AlertTriangle, Pill, FileText, Thermometer, Box, Share2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductById, getProductsByCategory } from '@/data/productsData';
import { uiTranslations } from '@/data/siteData';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, isRTL } = useLanguage();
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getProductsByCategory(product.categoryId).filter(p => p.id !== id).slice(0, 4) : [];

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section-container py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            {t({ en: 'Product Not Found', ar: 'المنتج غير موجود' })}
          </h1>
          <Link to="/products">
            <Button variant="navy">
              {t({ en: 'Back to Products', ar: 'العودة للمنتجات' })}
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const infoSections = [
    { key: 'composition', icon: Pill, label: { en: 'Composition', ar: 'التركيب' } },
    { key: 'indication', icon: FileText, label: { en: 'Indication', ar: 'دواعي الاستعمال' } },
    { key: 'dosage', icon: Package, label: { en: 'Dosage', ar: 'الجرعة' } },
    { key: 'sideEffects', icon: AlertTriangle, label: { en: 'Side Effects', ar: 'الآثار الجانبية' } },
    { key: 'contraindications', icon: AlertTriangle, label: { en: 'Contraindications', ar: 'موانع الاستعمال' } },
    { key: 'storage', icon: Thermometer, label: { en: 'Storage', ar: 'التخزين' } },
    { key: 'packaging', icon: Box, label: { en: 'Packaging', ar: 'التعبئة' } },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={{ en: product.name, ar: product.name }}
          breadcrumbs={[
            { label: uiTranslations.sections.ourProducts, href: '/products' },
            { label: { en: product.name, ar: product.name } }
          ]}
        />

        {/* Product Details */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <Card variant="elevated" className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="relative aspect-square bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-8"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400?text=${product.name}`;
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Share Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Badge variant="secondary" className="mb-4">
                  {t(product.category)}
                </Badge>
                
                <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {t(product.description)}
                </p>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="bg-primary/5 border-primary/10">
                    <CardContent className="p-4 text-center">
                      <Pill className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Composition', ar: 'التركيب' })}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent/5 border-accent/10">
                    <CardContent className="p-4 text-center">
                      <Package className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {t(product.packaging)}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Button */}
                <Link to="/products">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    {t({ en: 'Back to Products', ar: 'العودة للمنتجات' })}
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Detailed Information Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-16"
            >
              <Tabs defaultValue="composition" className="w-full">
                <TabsList className="w-full flex-wrap h-auto gap-2 bg-secondary/50 p-2 rounded-xl">
                  {infoSections.map((section) => (
                    <TabsTrigger
                      key={section.key}
                      value={section.key}
                      className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <section.icon className="w-4 h-4" />
                      {t(section.label)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {infoSections.map((section) => (
                  <TabsContent key={section.key} value={section.key}>
                    <Card variant="elevated">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <section.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary mb-3">
                              {t(section.label)}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {t(product[section.key as keyof typeof product] as { en: string; ar: string })}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t({ en: 'Related Products', ar: 'منتجات ذات صلة' })}
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relProduct, index) => (
                  <motion.div
                    key={relProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/products/${relProduct.id}`}>
                      <Card variant="elevated" className="group cursor-pointer h-full">
                        <CardContent className="p-4">
                          <div className="aspect-square bg-secondary/50 rounded-xl overflow-hidden mb-4">
                            <img
                              src={relProduct.image}
                              alt={relProduct.name}
                              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x200?text=${relProduct.name}`;
                              }}
                            />
                          </div>
                          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-center">
                            {relProduct.name}
                          </h3>
                          <p className="text-sm text-muted-foreground text-center mt-1">
                            {t(relProduct.category)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
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

export default ProductDetail;
