<script setup>
import MovieCard from '../MovieCard/index.vue';
const props = defineProps({ movie: Object });
const urlMovie = '/movie/' + props.movie.slug;
</script>

<template>
  <div class="movie__items">
    <MovieCard :movie="movie" />
    <div class="flex flex-col justify-center items-center py-1">
      <router-link
        :to="urlMovie"
        class="m-title inline text-xm max-w-[180px] text-center font-medium text-slate-200 hover:text-yellow-600 whitespace-nowrap overflow-hidden text-ellipsis"
        href="#"
        >{{ movie.name }}</router-link
      >
      <div
        class="flex items-center justify-center gap-1 text-[#656466] text-xs max-w-xs whitespace-nowrap overflow-hidden text-ellipsis"
      >
        <span class="">{{ movie.year }} </span>
        <div class="w-1 h-1 rounded-full bg-[#656466]"></div>
        <span class="">110 min </span>
        <div class="w-1 h-1 rounded-full bg-[#656466]"></div>
        <span class="">MOVIE</span>
      </div>
    </div>
  </div>
</template>
