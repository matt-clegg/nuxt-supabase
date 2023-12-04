<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();

async function onLogout () {
  await supabase.auth.signOut();
  await navigateTo("/");
}

</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/calendar">
            Calendar
          </nuxt-link>
        </li>
      </ul>

      <template v-if="user">
        <span>{{ user.email }}</span>
        <a-button @click="onLogout">
          Logout
        </a-button>
      </template>
      <template v-else>
        <a-button to="/login">
          Login
        </a-button>
      </template>
    </nav>
  </header>
</template>

<style scoped>

</style>
