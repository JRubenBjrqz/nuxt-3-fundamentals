<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const { data } = useFetch(`http://www.omdbapi.com/?apikey=${config.public.apiKey}&i=${route.params.id}`, {
  pick: ['Plot', 'Title'],
  key: `movie-${route.params.id}`,
});
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

