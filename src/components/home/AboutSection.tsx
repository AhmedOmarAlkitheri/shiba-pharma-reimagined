import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { companyInfo, certifications, aboutContent } from '@/data/siteData';

const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://shibapharma.com/assets/images/others/about-image.png"
                alt="Shiba Pharma Laboratory"
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group"
                >
                  <Play className="w-8 h-8 text-accent fill-accent ml-1" />
                </motion.button>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">WHO-GMP</div>
                  <div className="text-muted-foreground text-sm">
                    {t({ en: 'Certified Since 1999', ar: 'معتمدة منذ 1999' })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">
                {t({ en: 'About Us', ar: 'من نحن' })}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t({ en: 'Shiba Pharma Company for Pharmaceutical Industries', ar: 'شركة سبأ فارما للصناعات الدوائية' })}
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t(aboutContent.intro)}
            </p>

            {/* Certifications */}
            <div className="space-y-3 mb-8">
              {certifications.slice(0, 4).map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">
                    {t(cert.title)} - {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="navy" size="lg" className="group">
              {t({ en: 'Learn More About Us', ar: 'اعرف المزيد عنا' })}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
