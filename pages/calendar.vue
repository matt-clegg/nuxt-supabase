<script setup lang="ts">

function clickToThrow () {
  throw createError("I was thrown! (" + Math.random() * 1000 + ")");
}

</script>

<template>
  <div>
    <h1>Calendar</h1>
    <role-boundary role="coach">
      <nuxt-link to="/event/new">
        Create new event
      </nuxt-link>
    </role-boundary>

    <button @click="clickToThrow">
      Click to throw
    </button>
  </div>
</template>

<style scoped>

</style>
