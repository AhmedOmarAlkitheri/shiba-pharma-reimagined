import React from 'react';
import type { SectionRow } from '@/hooks/useSiteContent';
import HeroDesign1 from './hero/HeroDesign1';
import HeroDesign2 from './hero/HeroDesign2';
import HeroDesign3 from './hero/HeroDesign3';
import GenericDesign1 from './generic/GenericDesign1';
import GenericDesign2 from './generic/GenericDesign2';
import GenericDesign3 from './generic/GenericDesign3';

/**
 * Renders a CMS section by reading section_key + layout_variant from the DB row.
 * - section_key === 'hero' → HeroDesign1/2/3
 * - any other key → GenericDesign1/2/3 (used for about, values, news intros, CTA, etc.)
 *
 * layout_variant accepted values: 'design-1' | 'design-2' | 'design-3'
 */
const SectionRenderer: React.FC<{ section: SectionRow }> = ({ section }) => {
  if (!section.is_visible) return null;

  const variant = section.layout_variant || 'design-1';
  const isHero = section.section_key === 'hero';

  if (isHero) {
    if (variant === 'design-2') return <HeroDesign2 section={section} />;
    if (variant === 'design-3') return <HeroDesign3 section={section} />;
    return <HeroDesign1 section={section} />;
  }

  if (variant === 'design-2') return <GenericDesign2 section={section} />;
  if (variant === 'design-3') return <GenericDesign3 section={section} />;
  return <GenericDesign1 section={section} />;
};

export default SectionRenderer;

/** Render an array of sections in order */
export const SectionsList: React.FC<{ sections: SectionRow[] }> = ({ sections }) => (
  <>
    {sections.map((s) => (
      <SectionRenderer key={s.id} section={s} />
    ))}
  </>
);
