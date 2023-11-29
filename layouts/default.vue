<script setup lang="ts">

</script>

<template>
  <div>
    <site-header/>
    <nuxt-error-boundary>
    <nuxt-page/>
      <template #error="{error}">
        <strong>An error occured: {{ error}}</strong>
      </template>
    </nuxt-error-boundary>
    <site-footer/>
  </div>
</template>

<style scoped>

</style>
