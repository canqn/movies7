<script setup>
import images from '~/assets/images';

const props = defineProps({ movie: Object, isPlayer: Boolean, linkEmbed: String });
const emit = defineEmits(['click-player']);

const onClick = () => {
  emit('click-player');
};
</script>

<template>
  <div
    class="m__background top-0 left-0 mb-8 bg-cover opacity-70 -z-50 overflow-hidden"
    :style="{ 'background-image': `url(${movie.poster_url})` }"
  >
    <div class="m__player flex justify-center items-center" :class="[isPlayer ? '' : 'h-[450px]']">
      <a v-if="!isPlayer" href="#" @click="onClick">
        <img :src="images.play" alt="" srcset="" />
      </a>
      <iframe
        v-else
        class="w-full h-auto aspect-video opacity-100"
        :src="[linkEmbed]"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.m__player {
  background: linear-gradient(0deg, rgba(2, 9, 22, 1) 0%, rgba(2, 9, 22, 0) 100%);
}
</style>
