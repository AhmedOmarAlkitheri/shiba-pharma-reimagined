import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { companyInfo, certifications, aboutContent } from '@/data/siteData';

const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Decorative Background */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-accent/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-6 h-6 bg-primary/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-3 h-3 bg-accent/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Video */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://shibapharma.com/assets/images/others/about-image.png"
                alt="Shiba Pharma Laboratory"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group relative"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Pulse rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/50"
                    animate={{
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/50"
                    animate={{
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <Play className="w-8 h-8 text-accent fill-accent ml-1 relative z-10" />
                </motion.button>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Award className="w-7 h-7 text-accent" />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-primary">WHO-GMP</div>
                  <div className="text-muted-foreground text-sm">
                    {t({ en: 'Certified Since 1999', ar: 'معتمدة منذ 1999' })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Corner Element */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent/30 rounded-tl-3xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            {/* Section Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
              <span className="text-sm font-medium">
                {t({ en: 'About Us', ar: 'من نحن' })}
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t({ en: 'Shiba Pharma Company for Pharmaceutical Industries', ar: 'شركة سبأ فارما للصناعات الدوائية' })}
            </motion.h2>

            <motion.p 
              className="text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t(aboutContent.intro)}
            </motion.p>

            {/* Certifications */}
            <div className="space-y-3 mb-8">
              {certifications.slice(0, 4).map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: isRTL ? -5 : 5 }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground group-hover:text-accent transition-colors">
                    {t(cert.title)} - {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="navy" size="lg" className="group">
                    {t({ en: 'Learn More About Us', ar: 'اعرف المزيد عنا' })}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
