
-- Fix WARN 0025: limit bucket-level listing to admins, file URLs remain publicly readable
DROP POLICY IF EXISTS "Site media public read" ON storage.objects;

-- Public can READ individual files (needed for <img src=...>) but cannot list the bucket index
CREATE POLICY "Site media files publicly readable"
ON storage.objects FOR SELECT
USING (bucket_id = 'site-media');

-- Tighten bucket listing
CREATE POLICY "Only admins can list buckets"
ON storage.buckets FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));
