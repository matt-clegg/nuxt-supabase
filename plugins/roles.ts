import { useUserRoles } from "~/composables/resources/useUserRoles";
import { useSupabaseUser } from "#imports";
import type { Tables } from "~/types/supabase";

export default defineNuxtPlugin(async () => {
  const user = useSupabaseUser();

  const rolesState = useState<Tables<"user_roles"> | null>("user-role", () => null);

  async function loadUserRole () {
    if (user.value) {
      const { load } = useUserRoles();
      const role = await load();

      if (role.value) {
        if (role.value.error) {
          if (role.value.error.code === "PGRST116") {
            throw createError({
              message: "User does not have a role defined",
              statusMessage: "Missing user role"
            });
          } else {
            throw createError({
              message: "Unable to load role for user: " + role.value.error.message
            });
          }
        }

        if (role.value.data) {
          rolesState.value = role.value.data;
        } else {
          console.warn("No roles found for user: " + user.value.id);
        }
      } else {
        console.warn("Could not load roles for user: " + user.value.id);
      }
    }
  }

  watch(user, async (val) => {
    if (val) {
      await loadUserRole();
    } else {
      rolesState.value = null;
    }
  });

  await loadUserRole();
});
