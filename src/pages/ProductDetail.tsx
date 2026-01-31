import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Package, AlertTriangle, Pill, FileText, 
  Thermometer, Box, Share2, Heart, ChevronRight,
  Shield, Droplets, CheckCircle2
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductById, getProductsByCategory } from '@/data/productsData';
import { uiTranslations } from '@/data/siteData';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('composition');
  const [isFavorite, setIsFavorite] = useState(false);
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getProductsByCategory(product.categoryId).filter(p => p.id !== id).slice(0, 4) : [];

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
            <p className="text-muted-foreground mb-6">
              {t({ en: 'The product you are looking for does not exist.', ar: 'المنتج الذي تبحث عنه غير موجود.' })}
            </p>
            <Link to="/products">
              <Button className="bg-primary hover:bg-primary/90">
                {t({ en: 'Back to Products', ar: 'العودة للمنتجات' })}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const infoSections = [
    { key: 'composition', icon: Pill, label: { en: 'Composition', ar: 'التركيب' }, color: 'from-blue-500 to-cyan-500' },
    { key: 'indication', icon: FileText, label: { en: 'Indication', ar: 'دواعي الاستعمال' }, color: 'from-green-500 to-emerald-500' },
    { key: 'dosage', icon: Droplets, label: { en: 'Dosage', ar: 'الجرعة' }, color: 'from-purple-500 to-violet-500' },
    { key: 'sideEffects', icon: AlertTriangle, label: { en: 'Side Effects', ar: 'الآثار الجانبية' }, color: 'from-orange-500 to-amber-500' },
    { key: 'contraindications', icon: Shield, label: { en: 'Contraindications', ar: 'موانع الاستعمال' }, color: 'from-red-500 to-rose-500' },
    { key: 'storage', icon: Thermometer, label: { en: 'Storage', ar: 'التخزين' }, color: 'from-teal-500 to-cyan-500' },
    { key: 'packaging', icon: Box, label: { en: 'Packaging', ar: 'التعبئة' }, color: 'from-indigo-500 to-blue-500' },
  ];

  const activeSection = infoSections.find(s => s.key === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border/50">
          <div className="section-container py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                {t({ en: 'Home', ar: 'الرئيسية' })}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                {t(uiTranslations.sections.ourProducts)}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-primary font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="py-12 md:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              
              {/* Product Image - Premium Design */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative"
              >
                {/* Main Image Card */}
                <div className="relative bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-border/50 overflow-hidden">
                  {/* Background Decorations */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl" />
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/10 text-primary border-none font-medium">
                    {t(product.category)}
                  </Badge>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className={`bg-white/90 backdrop-blur hover:bg-white border-border/50 ${isFavorite ? 'text-accent' : ''}`}
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                    </Button>
                    <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur hover:bg-white border-border/50">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Product Image */}
                  <div className="relative aspect-square mt-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl" />
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="relative z-10 w-full h-full object-contain p-8"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400?text=${product.name}`;
                      }}
                    />
                  </div>
                  
                  {/* Quality Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-full py-2 px-4">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-primary">
                        {t({ en: 'WHO-GMP Certified', ar: 'معتمد من WHO-GMP' })}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                className="space-y-6"
              >
                {/* Product Title */}
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t(product.description)}
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/10">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Pill className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {t({ en: 'Composition', ar: 'التركيب' })}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {t(product.composition)}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-5 border border-accent/10">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                      <Box className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {t({ en: 'Packaging', ar: 'التعبئة' })}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {t(product.packaging)}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { en: 'High Quality', ar: 'جودة عالية', icon: '✓' },
                    { en: 'Lab Tested', ar: 'مختبر معتمد', icon: '🔬' },
                    { en: 'Safe Formula', ar: 'تركيبة آمنة', icon: '🛡️' },
                  ].map((feature, idx) => (
                    <div 
                      key={idx}
                      className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 text-sm"
                    >
                      <span>{feature.icon}</span>
                      <span className="text-foreground font-medium">{t(feature)}</span>
                    </div>
                  ))}
                </div>

                {/* Back Button */}
                <Link to="/products">
                  <Button variant="outline" className="gap-2 rounded-xl border-2 hover:bg-secondary/50">
                    <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    {t({ en: 'Back to Products', ar: 'العودة للمنتجات' })}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="py-16 bg-secondary/20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                {t({ en: 'Product Information', ar: 'معلومات المنتج' })}
              </h2>
              <p className="text-muted-foreground">
                {t({ en: 'Complete details about this medication', ar: 'تفاصيل كاملة عن هذا الدواء' })}
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
              {infoSections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveTab(section.key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeTab === section.key
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-white text-muted-foreground hover:bg-secondary border border-border/50'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{t(section.label)}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white border-none shadow-xl rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`h-2 bg-gradient-to-r ${activeSection?.color}`} />
                    <div className="p-8 md:p-12">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeSection?.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          {activeSection && <activeSection.icon className="w-8 h-8 text-white" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary mb-4">
                            {activeSection && t(activeSection.label)}
                          </h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {t(product[activeTab as keyof typeof product] as { en: string; ar: string })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Quick Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {infoSections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveTab(section.key)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTab === section.key
                      ? 'bg-primary w-8'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-10"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {t({ en: 'Related Products', ar: 'منتجات ذات صلة' })}
                  </h2>
                  <p className="text-muted-foreground">
                    {t({ en: 'You might also be interested in', ar: 'قد تكون مهتماً أيضاً بـ' })}
                  </p>
                </div>
                <Link to="/products">
                  <Button variant="outline" className="hidden md:flex gap-2 rounded-xl">
                    {t({ en: 'View All', ar: 'عرض الكل' })}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </Button>
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((relProduct, index) => (
                  <motion.div
                    key={relProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/products/${relProduct.id}`}>
                      <div className="group bg-white rounded-2xl p-4 shadow-soft hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/20 h-full">
                        <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-xl overflow-hidden mb-4">
                          <img
                            src={relProduct.image}
                            alt={relProduct.name}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x200?text=${relProduct.name}`;
                            }}
                          />
                        </div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-center text-sm">
                          {relProduct.name}
                        </h3>
                        <p className="text-xs text-muted-foreground text-center mt-1">
                          {t(relProduct.category)}
                        </p>
                      </div>
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
