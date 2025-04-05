<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

interface MovieResponse {
  Plot: string;
  Title: string;
  Poster: string;
  Error?: string;
}

const { data } = await useFetch<MovieResponse>(`https://www.omdbapi.com/?apikey=${config.public.apiKey}&i=${route.params.id}`, {
  pick: ['Plot', 'Title', 'Poster'],
  key: `movie-${route.params.id}`,
  onResponse({request, response}) {
    if (response._data.Error === 'Incorrect IMDb ID.') {
      showError({ statusCode: 404, statusMessage: 'Page not found' });
    }
  },
});

useHead({
  title: data.value?.Title || 'Movie Details',
  meta: [
    { name: 'description', content: data.value?.Plot || '' },
    { property: 'og:description', content: data.value?.Plot || '' },
    { property: 'og:image', content: data.value?.Poster || '' },
    { property: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

