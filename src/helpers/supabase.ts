import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient | null {
  if (!supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      console.warn(
        "Supabase environment variables are not configured. Waitlist functionality will be disabled."
      );
      return null;
    }

    supabase = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });
  }
  return supabase;
}

export async function subscribeToWaitlist(
  email: string
): Promise<{ success: boolean; error?: string }> {
  const client = getSupabaseClient();

  if (!client) {
    return { success: false, error: "service_unavailable" };
  }

  const { error } = await client.from("newsletter_members").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "already_subscribed" };
    }
    return { success: false, error: error.message };
  }

  return { success: true };
}
