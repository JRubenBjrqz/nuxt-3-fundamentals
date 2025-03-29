<script setup lang="ts">
definePageMeta({
  layout: 'plain',
});
</script>

<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <label>
      Username
      <input type="text" />
    </label>
    <label>
      Password
      <input type="password" />
    </label>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped></style>
