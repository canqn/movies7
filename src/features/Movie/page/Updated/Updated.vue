<script setup>
import { computed, ref, watch } from 'vue';
import movieApi from '../../../../api/movieApi';
import MovieList from '../../components/MovieList/index.vue';
const currentPage = ref(2);
const itemsPerPage = ref(10);
const totalPages = ref(500);
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

// const paginatedData = computed(() => {
//   const startIndex = (currentPage.value - 1) * itemsPerPage.value;
//   const endIndex = startIndex + itemsPerPage.value;
//   return movies.value.slice(startIndex, endIndex);
// });

// paginatedData();

function changePage(pageNumber) {
  currentPage.value = pageNumber;
}
</script>

<template>
  <div class="movie">
    <div class="main__movie my-3">
      <MovieList title="RECENTLY UPDATED" :movies="movies" />
    </div>
    <a-pagination v-model:current="currentPage" :total="50" show-less-items class="text-white" />
    <!-- <ul class="pagination">
      <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: currentPage === pageNumber }">
        <a @click="changePage(pageNumber)">{{ pageNumber }}</a>
      </li>
    </ul> -->
  </div>
</template>

<style scoped>
.pagination {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination li {
  margin: 0 5px;
}

.pagination li a {
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.pagination li a:hover {
  background-color: #f0f0f0;
}

.pagination li.active a {
  background-color: #007bff;
  color: #fff;
}
</style>
