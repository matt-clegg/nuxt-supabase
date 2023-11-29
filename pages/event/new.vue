<script setup lang="ts">

definePageMeta({
  middleware: "auth"
});

const event = ref({});

</script>

<template>
  <h1>New event</h1>

  <form @submit.prevent>
    <input placeholder="Title"
           required
           v-model="event.title"/>
    <textarea placeholder="Description"
              v-model="event.description"/>
    <input placeholder="Location"
           required
           v-model="event.location"/>

    <input type="datetime-local"
           required
           v-model="event.start_date"/>
    <input type="datetime-local"
           required
           v-model="event.end_date"/>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
