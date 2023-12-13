<script setup>
const props = defineProps({ title: String, router: String, movies: Array, isLoading: Boolean, errorMsg: String });
import MovieItem from './Item/Item.vue';
</script>
<template>
  <section>
    <div v-if="isLoading">
      <div v-for="i in 9" :key="i">
        <div class="border border-blue-300 shadow rounded-md p-2 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="bg-slate-700 h-12 w-9"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="errorMsg" class="flex justify-center items-center">
      <h1>{{ errorMsg }}</h1>
    </div>

    <div v-else class="section__start flex justify-between items-center mb-3">
      <h2 class="section__title uppercase text-2xl font-bold m-0">{{ props.title }}</h2>
      <div
        class="bg-first-color-alt-c hover:bg-yellow-color-c hover:text-white px-2 py-1 border-[1px] text-xs font-extralight text-text-color-light-c border-first-color-alt-c rounded-md cursor-pointer"
      >
        <RouterLink :to="props.router">more <font-awesome-icon :icon="['fas', 'arrow-right']" /></RouterLink>
      </div>
    </div>

    <MovieItem :movies="movies" />
  </section>
</template>
