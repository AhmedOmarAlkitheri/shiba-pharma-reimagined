import React, { useState, useEffect, forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { navigation, companyInfo, contactInfo } from '@/data/siteData';
import logo from '@/assets/logo.jfif';

const Header = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="section-container">
          <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-4 h-4" />
                <span>{t({ en: 'Industry:', ar: 'المصنع:' })} {contactInfo.industry}</span>
                <span className="mx-2">|</span>
                <span>{t({ en: 'Marketing:', ar: 'التسويق:' })} {contactInfo.marketingPhone}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-medium">{t(companyInfo.fullName)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={ref}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white'
        }`}
        {...props}
      >
        <div className="section-container">
          <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <Link to="/" className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <motion.img
                src={logo}
                alt="Shiba Pharma"
                className="h-14 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navigation.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.id)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''} ${
                      location.pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {t(item.label)}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-56 bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden z-50`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.href}
                            className={`block px-4 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                          >
                            {t(subItem.label)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'عربي' : 'EN'}</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border"
            >
              <div className="section-container py-4">
                {navigation.map((item) => (
                  <div key={item.id}>
                    <Link
                      to={item.href}
                      className={`block py-3 text-foreground hover:text-accent font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(item.label)}
                    </Link>
                    {item.submenu && (
                      <div className={`${isRTL ? 'pr-4' : 'pl-4'}`}>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.href}
                            className={`block py-2 text-muted-foreground hover:text-accent ${isRTL ? 'text-right' : 'text-left'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(subItem.label)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
});

Header.displayName = 'Header';

export default Header;
