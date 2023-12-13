<script setup>
import MovieItem from '../MovieItem/index.vue';
const props = defineProps({ title: String, movies: Array, isLoading: Boolean, errorMsg: String });
</script>

<template>
  <div class="movies__list">
    <h2 class="section__title uppercase text-2xl font-bold mb-3">{{ props.title }}</h2>
    <div v-if="isLoading" class="grid gap-3 mb:grid-cols-2 tb:grid-cols-4 dt:grid-cols-5">
      <!-- <a-spin size="large" tip="Loading..." /> -->

      <div
        v-for="n in 24"
        :key="n"
        role="status"
        class="max-w-sm border border-gray-200 rounded shadow animate-pulse md:p-6"
      >
        <div class="flex items-center justify-center h-[260px] tb:h-[236px] mb:h-[230px] mb-2 bg-gray-300 rounded">
          <svg
            class="w-10 h-10 text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path
              d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
            />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div>
    </div>

    <div v-else-if="errorMsg" class="grid place-items-center">
      <h2>{{ errorMsg }}</h2>
    </div>

    <div v-else class="main__item grid gap-3 mb:grid-cols-2 tb:grid-cols-4 dt:grid-cols-5">
      <MovieItem v-for="(movie, index) in props.movies" :key="index" :movie="movie" />
    </div>
    <!-- <div v-if="movies" class="grid place-content-center place-items-center">
      <h1>Movie not found!!!!</h1>
    </div> -->
  </div>
</template>

<style scoped>
.main__item {
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
}
</style>
