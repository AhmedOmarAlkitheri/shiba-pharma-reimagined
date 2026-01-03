import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import ValuesSection from '@/components/home/ValuesSection';
import NewsSection from '@/components/home/NewsSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ValuesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
