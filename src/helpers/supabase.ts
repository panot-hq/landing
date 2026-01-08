import { createClient } from "@supabase/supabase-js";

// Cliente anónimo para operaciones públicas (sin manejo de sesiones)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

export async function subscribeToWaitlist(
  email: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from("newsletter_members").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "already_subscribed" };
    }
    return { success: false, error: error.message };
  }

  return { success: true };
}
