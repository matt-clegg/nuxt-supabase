import type { Database } from "~/types/supabase";

export function useUserRoles () {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  async function load () {
    const { data } = await useAsyncData("user-role", async () => {
      if (user.value) {
        const { data, error } = await client
          .from("user_roles")
          .select("*")
          .eq("user_id", user.value.id)
          .single();

        return { data, error };
      }

      return null;
    });

    return data;
  }

  return {
    load
  };
}
