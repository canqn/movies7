<script setup>
import { computed } from 'vue';
import Image from '../../../../components/Image';

const props = defineProps({ movie: Object });
const srcImg = computed(() => {
  return `https://img.ophim1.com/uploads/movies/${props.movie.thumb_url}`;
});
</script>
<template>
  <RouterLink :to="{ name: 'TheMovie', params: { id: props.movie.slug } }">
    <div class="m__poster overflow-hidden rounded-lg dt:aspect-none group-hover:opacity-75">
      <div class="m-quality absolute top-2 left-2 bg-white font-bold text-xs px-1 rounded-md text-black">HD</div>
      <Image
        :src-img="srcImg"
        class-name="card-img w-full object-cover object-center"
        class="h-[260px] tb:h-[236px] mb:h-[230px]"
      />
    </div>
  </RouterLink>
</template>
<style scoped>
.m__poster {
  position: relative;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.m__poster:before {
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 1;
}

.m__poster:hover::before {
  content: url('../../../../assets/images/play-button.svg');
  cursor: pointer;
  border-radius: 10px;
  background: radial-gradient(
    circle,
    rgba(254, 196, 78, 0.04525560224089631) 40%,
    rgba(254, 196, 78, 0.7987570028011204) 100%
  );
  opacity: 1;
  border: 1px solid rgba(254, 196, 78, 0.7987570028011204);
  transition: 300ms;
}
</style>
