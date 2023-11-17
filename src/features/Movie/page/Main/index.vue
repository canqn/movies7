<script setup>
import { computed, ref, watch } from 'vue';
import movieApi from '../../../../api/movieApi';
import MovieList from '../../components/MovieList/index.vue';
const page = ref(1);
const isLoading = ref(false);
const movies = ref([]);

const fetchMovies = async (page) => {
  try {
    isLoading.value = true;
    const { items, status } = await movieApi.getAll(page);

    if (status) {
      isLoading.value = false;
      console.log(items);
      movies.value = items;
    }
  } catch (error) {
    isLoading.value = false;
    console.error(error);
  }
};

const created = () => {
  return fetchMovies(page);
};

created();
</script>

<template>
  <div class="main__movie my-3">
    <MovieList title="FEATURED" :movies="movies" />
  </div>
</template>
