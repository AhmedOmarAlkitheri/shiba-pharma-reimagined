import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  Send,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  companyInfo, 
  contactInfo, 
  socialLinks, 
  navigation,
  uiTranslations 
} from '@/data/siteData';
import logo from '@/assets/logo.jfif';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors z-10"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="w-5 h-5 text-accent-foreground" />
      </motion.button>

      {/* Main Footer */}
      <div className="section-container py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={logo} 
              alt="Shiba Pharma" 
              className="h-20 w-auto mb-6 bg-white rounded-lg p-2"
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {t(companyInfo.description)}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: socialLinks.youtube },
                { icon: Facebook, href: socialLinks.facebook },
                { icon: Linkedin, href: socialLinks.linkedin },
                { icon: Instagram, href: socialLinks.instagram },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {t(uiTranslations.sections.contactUs)}
            </h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: { en: 'Factory:', ar: 'المصنع:' }, content: contactInfo.factory.address },
                { icon: MapPin, label: { en: 'Marketing:', ar: 'التسويق:' }, content: contactInfo.marketing.address },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                    <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <p className="font-medium">{t(item.label)}</p>
                    <p className="text-primary-foreground/70 text-sm">{t(item.content)}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div className="flex gap-3 items-center" whileHover={{ x: 5 }}>
                <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                </motion.div>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </motion.div>
              <motion.div className="flex gap-3" whileHover={{ x: 5 }}>
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <p className="font-medium">{t({ en: 'Marketing:', ar: 'التسويق:' })}</p>
                  <p className="text-primary-foreground/70 text-sm">
                    {contactInfo.marketing.phones.slice(0, 2).join(' | ')}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {t({ en: 'Quick Links', ar: 'روابط سريعة' })}
            </h4>
            <ul className="space-y-3">
              {navigation.slice(0, 6).map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <motion.span 
                      className={`w-1.5 h-1.5 rounded-full bg-accent ${isRTL ? 'order-last' : ''}`}
                      whileHover={{ scale: 2 }}
                    />
                    <motion.span whileHover={{ x: isRTL ? -5 : 5 }}>
                      {t(item.label)}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {t(uiTranslations.sections.subscribeNewsletter)}
            </h4>
            <p className="text-primary-foreground/70 mb-6">
              {t(uiTranslations.sections.newsletterDescription)}
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder={t(uiTranslations.form.yourEmail)}
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent transition-all duration-300"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="accent" className="w-full group">
                  <motion.span
                    className={`${isRTL ? 'ml-2' : 'mr-2'}`}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.span>
                  {t(uiTranslations.common.subscribe)}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} {t(companyInfo.fullName)}. {t({ en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' })}
            </p>
            <div className="flex gap-6 text-sm">
              {[
                { to: '/privacy', label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' } },
                { to: '/terms', label: { en: 'Terms of Service', ar: 'شروط الخدمة' } },
              ].map((link) => (
                <motion.div key={link.to} whileHover={{ y: -2 }}>
                  <Link to={link.to} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {t(link.label)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
