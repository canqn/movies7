<script setup>
import MovieItem from '../MovieItem/index.vue';
const props = defineProps({ title: String, movies: Array });
</script>

<template>
  <div class="movies__list">
    <h2 class="section__title uppercase text-2xl font-bold mb-3">{{ props.title }}</h2>
    <div class="main__item grid gap-3 mb:grid-cols-2 tb:grid-cols-4 dt:grid-cols-5">
      <MovieItem v-for="(movie, index) in movies" :key="index" :movie="movie" />
    </div>
  </div>
</template>

<style scoped>
.main__item {
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
}
</style>
