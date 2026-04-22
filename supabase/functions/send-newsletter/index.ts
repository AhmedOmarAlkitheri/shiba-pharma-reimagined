import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(supabaseUrl, serviceKey);

    const body = await req.json().catch(() => ({}));
    const { article_id, subject, html, test_email } = body as {
      article_id?: string;
      subject?: string;
      html?: string;
      test_email?: string;
    };

    let emailSubject = subject ?? "Shiba Pharma — Newsletter";
    let emailHtml = html ?? "";

    if (article_id) {
      const { data: article } = await admin
        .from("news_articles")
        .select("title_en, title_ar, excerpt_en, excerpt_ar, image_url, slug")
        .eq("id", article_id)
        .maybeSingle();
      if (article) {
        emailSubject = `📰 ${article.title_en}`;
        emailHtml = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;background:#fff;padding:24px;border:1px solid #eee;border-radius:8px">
            ${article.image_url ? `<img src="${article.image_url}" style="width:100%;border-radius:8px;margin-bottom:16px"/>` : ""}
            <h1 style="color:#0a2540">${article.title_en}</h1>
            <h2 style="color:#666;font-weight:normal" dir="rtl">${article.title_ar}</h2>
            <p style="color:#444;line-height:1.6">${article.excerpt_en ?? ""}</p>
            <p style="color:#666;line-height:1.6" dir="rtl">${article.excerpt_ar ?? ""}</p>
            <hr style="margin:24px 0;border:none;border-top:1px solid #eee"/>
            <p style="font-size:12px;color:#999">Shiba Pharma — You are receiving this because you subscribed to our newsletter.</p>
          </div>`;
      }
    }

    // Recipients
    let recipients: { email: string }[] = [];
    if (test_email) {
      recipients = [{ email: test_email }];
    } else {
      const { data } = await admin
        .from("newsletter_subscribers")
        .select("email")
        .eq("is_active", true);
      recipients = data ?? [];
    }

    // Try Lovable transactional sender if available; otherwise log only.
    let sent = 0;
    let skipped = 0;
    for (const r of recipients) {
      try {
        const resp = await admin.functions.invoke("send-transactional-email", {
          body: {
            templateName: "newsletter",
            recipientEmail: r.email,
            idempotencyKey: `news-${article_id ?? "manual"}-${r.email}`,
            templateData: { subject: emailSubject, html: emailHtml },
          },
        });
        if (resp.error) skipped++;
        else sent++;
      } catch {
        skipped++;
      }
    }

    return json({ ok: true, total: recipients.length, sent, skipped });
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
