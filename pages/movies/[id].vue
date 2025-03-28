<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const { data } = await useAsyncData(`/movies/${route.params.id}`, () => {
  return $fetch(`http://www.omdbapi.com/?apikey=${config.public.apiKey}&i=${route.params.id}`);
});
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

