<script setup>
import { computed } from 'vue';
import { useMovies } from '~/hooks/useMovies';
import SidebarItem from '~/components/SidebarItem';

const { movies, isLoading, errorMsg } = useMovies();
const moviesList = computed(() => movies.value.slice(0, 10));
</script>

<template>
  <SidebarItem title="Updated" :movies="moviesList" router="/updated" :is-loading="isLoading" :error-msg="errorMsg" />
</template>
