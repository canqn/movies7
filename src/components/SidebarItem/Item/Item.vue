<script setup>
const props = defineProps({ movies: Array });
</script>

<template>
  <div class="section__content flex flex-col gap-2">
    <div
      v-for="(movie, index) in props.movies"
      :key="index"
      class="m__card p-2 rounded-lg border-first-color-alt-c border-[1px] flex gap-2 cursor-pointer hover:bg-first-color-alt-c"
    >
      <img
        :src="`https://img.ophim1.com/uploads/movies/${movie.poster_url}`"
        :alt="movie.name"
        srcset=""
        class="rounded-lg w-24 object-cover h-full"
      />
      <div class="m__heading flex flex-col gap-2">
        <div
          class="m__title text-sm font-medium max-w-[188px] tb:max-w-xl whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {{ movie.origin_name }}
        </div>

        <div class="flex items-center gap-2 text-xs text-text-color-light-c">
          <div class="m-quality bg-white font-bold text-xs px-1 rounded-md text-black">HD</div>
          <span class="">{{ movie.year }} </span>
          <div class="w-1 h-1 rounded-full bg-[#656466]"></div>
          <span class="">110 min </span>
        </div>
      </div>
    </div>
  </div>
</template>
