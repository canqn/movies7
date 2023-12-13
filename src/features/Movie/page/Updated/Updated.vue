<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import movieApi from '../../../../api/movieApi';
import MovieList from '../../components/MovieList/index.vue';
import Pagination from '~/components/Paginate';
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(113);
const totalPages = ref(11);
const isLoading = ref(false);
const movies = ref([]);
const errorMsg = ref(null);

const fetchMovies = async (currPage) => {
  try {
    isLoading.value = true;
    const { items, status, pagination } = await movieApi.getAll(currPage);
    const { totalItemsPerPage, currentPage, totalPages: totalPagesApi, totalItems: totalItemsApi } = pagination;

    totalItems.value = totalItemsApi;
    totalPages.value = totalPagesApi;
    itemsPerPage.value = totalItemsPerPage;

    if (status) {
      isLoading.value = false;
      movies.value = items;
    }
  } catch (error) {
    isLoading.value = false;
    errorMsg.value(error);
  }
};
fetchMovies(currentPage.value);

watch(currentPage, (newPage) => {
  fetchMovies(newPage);
});

function onPageChange(pageNumber) {
  currentPage.value = pageNumber;
}
</script>

<template>
  <div class="movie">
    <div class="main__movie my-3">
      <MovieList title="RECENTLY UPDATED" :movies="movies" :is-loading="isLoading" />
    </div>

    <div v-if="movies">
      <Pagination
        :total-pages="totalPages"
        :total="totalItems"
        :per-page="itemsPerPage"
        :current-page="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<style scoped></style>
