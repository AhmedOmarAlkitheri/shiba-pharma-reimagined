
-- Add the missing pages so admin can manage them all from /admin/pages
INSERT INTO public.pages (slug, title_en, title_ar, display_order, is_published)
VALUES
  ('management', 'Management Word', 'كلمة الإدارة', 8, true),
  ('social-responsibility', 'Social Responsibility', 'المسؤولية الاجتماعية', 9, true),
  ('quality', 'Quality Management', 'إدارة الجودة', 10, true)
ON CONFLICT (slug) DO NOTHING;

-- Seed initial sections for every page that currently has none
DO $$
DECLARE
  v_pid uuid;
BEGIN
  -- MANAGEMENT page
  SELECT id INTO v_pid FROM public.pages WHERE slug = 'management';
  IF NOT EXISTS (SELECT 1 FROM public.sections WHERE page_id = v_pid) THEN
    INSERT INTO public.sections (page_id, section_key, layout_variant, display_order, title_en, title_ar, description_en, description_ar) VALUES
    (v_pid, 'header', 'design-1', 0, 'Management Word', 'كلمة الإدارة', 'A message from our chairman.', 'كلمة من رئيس مجلس الإدارة.'),
    (v_pid, 'content', 'design-2', 1, 'Our Vision', 'رؤيتنا', 'We are committed to delivering quality healthcare.', 'نحن ملتزمون بتقديم رعاية صحية عالية الجودة.');
  END IF;

  -- SOCIAL RESPONSIBILITY page
  SELECT id INTO v_pid FROM public.pages WHERE slug = 'social-responsibility';
  IF NOT EXISTS (SELECT 1 FROM public.sections WHERE page_id = v_pid) THEN
    INSERT INTO public.sections (page_id, section_key, layout_variant, display_order, title_en, title_ar, description_en, description_ar) VALUES
    (v_pid, 'individuals', 'design-1', 0, 'Towards Individuals', 'تجاه الأفراد', 'Caring for our employees and partners.', 'الاهتمام بموظفينا وشركائنا.'),
    (v_pid, 'community', 'design-2', 1, 'Towards Community', 'تجاه المجتمع', 'Supporting community initiatives.', 'دعم المبادرات المجتمعية.'),
    (v_pid, 'environment', 'design-3', 2, 'Towards Environment', 'تجاه البيئة', 'Protecting our environment.', 'حماية بيئتنا.');
  END IF;

  -- QUALITY page
  SELECT id INTO v_pid FROM public.pages WHERE slug = 'quality';
  IF NOT EXISTS (SELECT 1 FROM public.sections WHERE page_id = v_pid) THEN
    INSERT INTO public.sections (page_id, section_key, layout_variant, display_order, title_en, title_ar, description_en, description_ar) VALUES
    (v_pid, 'integrated-policy', 'design-1', 0, 'Integrated Management System Policy', 'سياسة نظام الإدارة المتكامل', '', ''),
    (v_pid, 'quality-policy', 'design-2', 1, 'Quality Management System Policy', 'سياسة نظام إدارة الجودة', '', ''),
    (v_pid, 'integrated-scope', 'design-1', 2, 'Integrated Management Scope', 'نطاق نظام الإدارة المتكامل', '', ''),
    (v_pid, 'quality-scope', 'design-2', 3, 'Quality Management Scope', 'نطاق نظام إدارة الجودة', '', ''),
    (v_pid, 'strategic', 'design-3', 4, 'Strategic Direction', 'التوجه الاستراتيجي', '', '');
  END IF;

  -- PRODUCTS page (intro/CTA sections; product cards still come from products table)
  SELECT id INTO v_pid FROM public.pages WHERE slug = 'products';
  IF NOT EXISTS (SELECT 1 FROM public.sections WHERE page_id = v_pid) THEN
    INSERT INTO public.sections (page_id, section_key, layout_variant, display_order, title_en, title_ar, description_en, description_ar) VALUES
    (v_pid, 'intro', 'design-1', 0, 'Our Products', 'منتجاتنا', 'Browse our full pharmaceutical catalog.', 'تصفح كتالوج منتجاتنا الدوائية الكامل.'),
    (v_pid, 'cta', 'design-3', 1, 'Need Help Choosing?', 'تحتاج مساعدة في الاختيار؟', 'Contact our medical team.', 'تواصل مع فريقنا الطبي.');
  END IF;

  -- NEWS page
  SELECT id INTO v_pid FROM public.pages WHERE slug = 'news';
  IF NOT EXISTS (SELECT 1 FROM public.sections WHERE page_id = v_pid) THEN
    INSERT INTO public.sections (page_id, section_key, layout_variant, display_order, title_en, title_ar, description_en, description_ar) VALUES
    (v_pid, 'intro', 'design-1', 0, 'Latest News', 'آخر الأخبار', 'Stay updated with our company news.', 'ابق على اطلاع بأخبار الشركة.');
  END IF;

  -- VIDEOS page
  SELECT id INTO v_pid FROM public.pages WHERE slug = 'videos';
  IF NOT EXISTS (SELECT 1 FROM public.sections WHERE page_id = v_pid) THEN
    INSERT INTO public.sections (page_id, section_key, layout_variant, display_order, title_en, title_ar, description_en, description_ar) VALUES
    (v_pid, 'intro', 'design-1', 0, 'Video Gallery', 'معرض الفيديوهات', 'Watch our latest videos.', 'شاهد أحدث الفيديوهات.');
  END IF;
END $$;
