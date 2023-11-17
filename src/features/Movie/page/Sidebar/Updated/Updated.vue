<script setup>
import { computed, ref, watch } from 'vue';
import movieApi from '~/api/movieApi';
import SidebarItem from '~/components/SidebarItem';
const page = ref(1);
const isLoading = ref(false);
const movies = ref([]);

const fetchMovies = async (page) => {
  try {
    isLoading.value = true;
    const { items, status } = await movieApi.getAll(page);

    if (status) {
      isLoading.value = false;
      movies.value = items.slice(0, 10);
    }
  } catch (error) {
    isLoading.value = false;
    console.error(error);
  }
};

fetchMovies(page);
</script>

<template>
  <SidebarItem title="Updated" :movies="movies" router="/updated" />
</template>
