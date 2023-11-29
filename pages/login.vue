<script setup lang="ts">

const email = ref("test@example.com");
const password = ref("password123");

const supabase = useSupabaseClient();

async function onSubmit() {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });

  await navigateTo("/");

  console.log("data", data);
  if (error) {
    console.error("error", error);
  }
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input placeholder="Email address"
             type="email"
             required="required"
             v-model="email"/>
      <input placeholder="Password"
             type="password"
             required="required"
             v-model="password"/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>

</style>
