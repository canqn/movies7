<script setup>
const props = defineProps({ title: String, router: String, movies: Array });
import MovieItem from './Item/Item.vue';
</script>
<template>
  <section>
    <div class="section__start flex justify-between mb-3 items-center">
      <h2 class="section__title uppercase text-2xl font-bold">{{ props.title }}</h2>
      <span
        class="bg-first-color-alt-c hover:bg-yellow-color-c hover:text-white px-2 py-1 border-[1px] text-xs font-extralight text-text-color-light-c border-first-color-alt-c rounded-md cursor-pointer"
        ><RouterLink :to="props.router">more-></RouterLink></span
      >
    </div>

    <MovieItem :movies="movies" />
  </section>
</template>
