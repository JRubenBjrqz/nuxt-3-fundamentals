<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const { data } = useFetch(`http://www.omdbapi.com/?apikey=${config.public.apiKey}&i=${route.params.id}`, {
  pick: ['Plot', 'Title', 'Error'],
  key: `movie-${route.params.id}`,
});

if (data.value.Error === 'Incorrect IMDb ID.') {
  showError({ statusCode: 404, statusMessage: 'Page not found' });
}
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

