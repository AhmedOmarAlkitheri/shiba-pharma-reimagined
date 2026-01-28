import React, { forwardRef } from 'react';
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
  Factory,
  Building2,
  ArrowLeft,
  ArrowRight
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

const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground" {...props}>
      {/* Main Footer */}
      <div className="section-container py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <img src={logo} alt="Shiba Pharma" className="h-20 w-auto mb-6 bg-white rounded-lg p-2" />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {t(companyInfo.description)}
            </p>
            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'justify-end' : ''}`}>
              {[
                { icon: Youtube, href: socialLinks.youtube, label: 'YouTube' },
                { icon: Facebook, href: socialLinks.facebook, label: 'Facebook' },
                { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">{t(uiTranslations.sections.contactUs)}</h4>
            <div className="space-y-4">
              <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Factory className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{t({ en: 'Factory:', ar: 'المصنع:' })}</p>
                  <p className="text-primary-foreground/70 text-sm">{t(contactInfo.factory.address)}</p>
                </div>
              </div>
              <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Building2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{t({ en: 'Marketing:', ar: 'التسويق:' })}</p>
                  <p className="text-primary-foreground/70 text-sm">{t(contactInfo.marketing.address)}</p>
                </div>
              </div>
              <div className={`flex gap-3 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/70 text-sm">
                    {contactInfo.marketing.phones.slice(0, 2).join(' | ')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">{t({ en: 'Quick Links', ar: 'روابط سريعة' })}</h4>
            <ul className="space-y-3">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className={`text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2 group ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform`} />
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">{t(uiTranslations.sections.subscribeNewsletter)}</h4>
            <p className="text-primary-foreground/70 mb-6">
              {t(uiTranslations.sections.newsletterDescription)}
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder={t(uiTranslations.form.yourEmail)}
                className={`bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent ${isRTL ? 'text-right' : ''}`}
              />
              <Button variant="accent" className={`w-full flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Send className="w-4 h-4" />
                {t(uiTranslations.common.subscribe)}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} {t(companyInfo.fullName)}. {t({ en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' })}
            </p>
            <div className={`flex gap-6 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link to="/privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t({ en: 'Privacy Policy', ar: 'سياسة الخصوصية' })}
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t({ en: 'Terms of Service', ar: 'شروط الخدمة' })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
