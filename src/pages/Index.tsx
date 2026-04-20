import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import ValuesSection from '@/components/home/ValuesSection';
import NewsSection from '@/components/home/NewsSection';
import { usePageSections } from '@/hooks/useSiteContent';
import { SectionsList } from '@/components/sections/SectionRenderer';

const Index: React.FC = () => {
  const { sections, loading } = usePageSections('home');

  // If admin has configured CMS sections for "home", render them dynamically.
  // Otherwise fall back to the original hardcoded composition.
  const useCms = !loading && sections.length > 0;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {useCms ? (
          <SectionsList sections={sections} />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <ValuesSection />
            <NewsSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
