import { createClient } from "@/utils/supabase/client";

export const getUserSession = async () => {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};
