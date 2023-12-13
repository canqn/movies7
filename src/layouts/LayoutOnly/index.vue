<script setup>
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRoute } from 'vue-router';
import config from '../../config';
import images from '../../assets/images';
const route = useRoute();
</script>

<template>
  <div class="wrapper">
    <Header />
    <main
      class="main"
      :class="route.path !== config.routes.home ? 'mx-4' : 'main-bg bg-cover overflow-hidden'"
      :style="route.path === config.routes.home ? { 'background-image': `url(${images.bgHome})` } : ''"
    >
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.main-bg {
  /* background: linear-gradient(90deg, rgba(2, 9, 22, 1) 0%, rgba(2, 9, 22, 0) 100%); */
}
</style>
