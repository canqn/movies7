<script setup>
const props = defineProps({ movie: Object });
const srcImg = `https://img.ophim1.com/uploads/movies/${props.movie.poster_url}`;
</script>
<template>
  <div class="m__poster overflow-hidden rounded-lg dt:aspect-none group-hover:opacity-75">
    <div class="m-quality absolute top-2 left-2 bg-white font-bold text-xs px-1 rounded-md text-black">HD</div>
    <img :src="srcImg" alt="" class="card-img h-full min-h-[280px] w-full object-cover object-center" />
  </div>
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
    rgba(254, 196, 78, 0.04525560224089631) 47%,
    rgba(254, 196, 78, 0.7987570028011204) 100%
  );
  opacity: 0.7;
}
</style>
