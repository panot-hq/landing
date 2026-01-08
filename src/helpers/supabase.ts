import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (!supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      throw new Error("Supabase environment variables are not configured");
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
  const { error } = await getSupabaseClient()
    .from("newsletter_members")
    .insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "already_subscribed" };
    }
    return { success: false, error: error.message };
  }

  return { success: true };
}
