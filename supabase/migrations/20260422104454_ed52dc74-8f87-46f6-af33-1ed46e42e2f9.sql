-- Trigger to auto-send newsletter when a news article is published
CREATE OR REPLACE FUNCTION public.notify_subscribers_on_publish()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_url TEXT;
  v_key TEXT;
BEGIN
  -- Only fire when transitioning to published
  IF (TG_OP = 'INSERT' AND NEW.is_published = true)
     OR (TG_OP = 'UPDATE' AND NEW.is_published = true AND OLD.is_published = false) THEN
    
    BEGIN
      v_url := current_setting('app.supabase_url', true);
      v_key := current_setting('app.service_role_key', true);
    EXCEPTION WHEN OTHERS THEN
      RETURN NEW;
    END;

    IF v_url IS NOT NULL AND v_key IS NOT NULL THEN
      PERFORM net.http_post(
        url := v_url || '/functions/v1/send-newsletter',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', 'Bearer ' || v_key
        ),
        body := jsonb_build_object('article_id', NEW.id)
      );
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS news_publish_notify ON public.news_articles;
CREATE TRIGGER news_publish_notify
AFTER INSERT OR UPDATE ON public.news_articles
FOR EACH ROW EXECUTE FUNCTION public.notify_subscribers_on_publish();