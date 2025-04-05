<script setup lang="ts">
const query = ref('spider-man');
const movies = ref([]);
const config = useRuntimeConfig();

async function search() {
  const { Search } = await $fetch(`https://www.omdbapi.com/?apikey=${config.public.apiKey}&s=${query.value}`);
  movies.value = Search;
}

search();
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query"/>
      <button type="submit">Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
