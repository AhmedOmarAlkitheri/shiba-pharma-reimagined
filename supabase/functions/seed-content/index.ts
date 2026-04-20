// One-shot seeding endpoint. Reads embedded SQL & executes via service role.
// Safe to leave deployed: only inserts (no destructive resets) and idempotent (ON CONFLICT DO NOTHING).
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Read embedded SQL
    const sqlUrl = new URL("./_seed.sql", import.meta.url);
    const sql = await Deno.readTextFile(sqlUrl);

    // Use raw SQL via REST fetch to /pg/ endpoint (Supabase doesn't expose this).
    // Instead split into statements and call .rpc('exec_sql', { sql }) — but that RPC
    // doesn't exist by default. So we run statements via a custom RPC we create.

    // We'll just use individual table inserts, so create a simple exec function via SQL:
    // Run by splitting on `;\n` and using PostgREST `rpc/exec_sql` if available.
    // Fallback: use the underlying admin endpoint.

    const stmts = sql.split(/;\s*\n/).map((s) => s.trim()).filter(Boolean);

    // Use Supabase's admin SQL endpoint via direct fetch
    const results: any[] = [];
    for (const stmt of stmts) {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: stmt + ";" }),
      });
      results.push({ ok: res.ok, status: res.status });
    }

    return new Response(JSON.stringify({ ok: true, executed: stmts.length, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
