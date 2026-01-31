import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { uiTranslations } from '@/data/siteData';
import { allProducts } from '@/data/productsData';

const ProductsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-primary px-6 py-3 rounded-full mb-6 border border-primary/10"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wide">
              {t({ en: 'Premium Pharmaceuticals', ar: 'منتجات صيدلانية فاخرة' })}
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">{t({ en: 'Our', ar: 'منتجاتنا' })}</span>
            {' '}
            <span className="text-gradient-accent">{t({ en: 'Products', ar: 'المميزة' })}</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t({ 
              en: 'Discover our wide range of high-quality pharmaceutical products manufactured to the highest international standards.',
              ar: 'اكتشف مجموعتنا الواسعة من المنتجات الدوائية عالية الجودة المصنعة وفقًا لأعلى المعايير الدولية.'
            })}
          </p>
        </motion.div>

        {/* Products Grid - Premium Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {allProducts.slice(0, 10).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
            >
              <Link to={`/products/${product.id}`}>
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-4 shadow-soft hover:shadow-strong transition-all duration-500 h-full border border-border/50 hover:border-primary/20 overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Product Image Container */}
                    <div className="relative aspect-square mb-4 rounded-xl bg-gradient-to-br from-secondary/80 to-secondary/30 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />
                      </div>
                      
                      <img
                        src={product.image}
                        alt={product.name}
                        className="relative z-10 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x200?text=' + product.name;
                        }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 z-20 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Eye className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="relative z-10 text-center space-y-2">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-sm md:text-base line-clamp-1">
                        {product.name}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className="text-xs bg-secondary/50 border-primary/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300"
                      >
                        {t(product.category)}
                      </Badge>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link to="/products">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>{t(uiTranslations.common.viewAll)}</span>
              <ArrowRight className={`w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1 mr-2 ml-0' : ''}`} />
            </Button>
          </Link>
          
          <p className="text-muted-foreground text-sm mt-4">
            {t({ en: `Explore all ${allProducts.length}+ products`, ar: `استكشف أكثر من ${allProducts.length} منتج` })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
