<script setup lang="ts">
import type { Enums, Tables } from "~/types/supabase";

const props = defineProps<{
  role: Enums<"app_role">,
  exact?: boolean
}>();

const mapping : Record<Enums<"app_role">, number> = {
  nonmember: 0,
  member: 1,
  coach: 2,
  committee: 3
};

const userRole = useState<Tables<"user_roles"> | null>("user-role");

const hasRole = computed(() => {
  if (userRole.value) {
    if (props.exact) {
      return userRole.value.role === props.role;
    }

    const requiredRoleIndex = mapping[props.role];
    const userRoleIndex = mapping[userRole.value.role];
    return userRoleIndex >= requiredRoleIndex;
  }

  return false;
});

</script>

<template>
  <template v-if="hasRole">
    <slot />
  </template>
</template>

<style scoped>

</style>
