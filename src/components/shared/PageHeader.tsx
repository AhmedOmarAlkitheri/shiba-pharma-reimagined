import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Translation } from '@/data/siteData';

interface PageHeaderProps {
  title: Translation;
  breadcrumbs?: { label: Translation; href?: string }[];
}

const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(({ title, breadcrumbs }, ref) => {
  const { t, isRTL } = useLanguage();
  const Separator = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${isRTL ? 'text-right' : 'text-left'}`}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <nav className="mb-4">
              <ol className={`flex items-center gap-2 text-white/70 text-sm ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <li>
                  <Link to="/" className={`hover:text-white transition-colors flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Home className="w-4 h-4" />
                    {t({ en: 'Home', ar: 'الرئيسية' })}
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <Separator className="w-4 h-4" />
                    </li>
                    <li>
                      {crumb.href ? (
                        <Link to={crumb.href} className="hover:text-white transition-colors">
                          {t(crumb.label)}
                        </Link>
                      ) : (
                        <span className="text-white">{t(crumb.label)}</span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            {t(title)}
          </motion.h1>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V60Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
});

PageHeader.displayName = 'PageHeader';

export default PageHeader;
