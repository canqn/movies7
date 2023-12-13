<script setup>
import Image from '../../Image';
import images from '../../../assets/images';
const props = defineProps({ movies: Array });
</script>

<template>
  <div class="section__content flex flex-col gap-2">
    <div
      v-for="(movie, index) in props.movies"
      :key="index"
      class="m__card p-2 rounded-lg border-first-color-alt-c border-[1px] cursor-pointer hover:bg-first-color-alt-c hover:duration-300"
    >
      <RouterLink :to="{ name: 'TheMovie', params: { id: movie.slug } }" class="flex gap-2">
        <Image
          :src-img="`https://img.ophim1.com/uploads/movies/${movie.thumb_url}`"
          :alt-img="movie.name"
          class-name="rounded-lg object-cover"
          :fallback="images.noImage"
          class="h-12 w-9"
        />
        <div class="m__heading flex flex-col gap-2">
          <div
            class="m__title text-sm font-medium max-w-[15rem] tb:max-w-xl whitespace-nowrap overflow-hidden text-ellipsis"
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
      </RouterLink>
    </div>
  </div>
</template>
