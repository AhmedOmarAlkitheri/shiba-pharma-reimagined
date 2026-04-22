import React from 'react';
import { Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { usePageSections } from '@/hooks/useSiteContent';
import { SectionsList } from '@/components/sections/SectionRenderer';

interface Props {
  slug: string;
  title: { en: string; ar: string };
  fallback?: React.ReactNode;
}

/**
 * Renders a page entirely from CMS sections.
 * If no sections exist yet, falls back to the legacy hardcoded content.
 */
const DynamicPage: React.FC<Props> = ({ slug, title, fallback }) => {
  const { sections, loading } = usePageSections(slug);
  const useCms = !loading && sections.length > 0;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader title={title} breadcrumbs={[{ label: title }]} />
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : useCms ? (
          <SectionsList sections={sections} />
        ) : (
          fallback
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DynamicPage;
