<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <h1>MCC Supabase Clone</h1>
  <client-only>
    <pre>{{user}}</pre>
  </client-only>
</template>

<style scoped>

</style>
