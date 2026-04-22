
-- 1. Add missing product fields (features, specifications, certificates, gallery, etc.)
ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS features_en text[],
  ADD COLUMN IF NOT EXISTS features_ar text[],
  ADD COLUMN IF NOT EXISTS specifications jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS gallery_urls text[],
  ADD COLUMN IF NOT EXISTS certifications text[],
  ADD COLUMN IF NOT EXISTS warnings_en text,
  ADD COLUMN IF NOT EXISTS warnings_ar text,
  ADD COLUMN IF NOT EXISTS interactions_en text,
  ADD COLUMN IF NOT EXISTS interactions_ar text,
  ADD COLUMN IF NOT EXISTS pregnancy_en text,
  ADD COLUMN IF NOT EXISTS pregnancy_ar text,
  ADD COLUMN IF NOT EXISTS overdose_en text,
  ADD COLUMN IF NOT EXISTS overdose_ar text;

-- 2. Newsletter subscribers
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text,
  language text NOT NULL DEFAULT 'en',
  is_active boolean NOT NULL DEFAULT true,
  unsubscribe_token uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins manage subscribers"
  ON public.newsletter_subscribers FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_subs_updated_at
  BEFORE UPDATE ON public.newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3. Contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins manage contact"
  ON public.contact_messages FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
