<script setup>
import { useMovies } from '~/hooks/useMovies';
import MovieList from '../../components/MovieList/index.vue';

const { movies, isLoading, errorMsg } = useMovies();
</script>

<template>
  <div class="main__movie my-3">
    <MovieList title="FEATURED" :movies="movies" :is-loading="isLoading" :error-msg="errorMsg" />
  </div>
</template>
