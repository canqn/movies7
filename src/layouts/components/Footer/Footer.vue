<script setup>
import { ref } from 'vue';
import config from '../../../config';
import images from '~/assets/images';

const listItems = ref([
  { id: 1, name: 'Home', route: config.routes.home },
  { id: 2, name: 'About', route: config.routes.about },
  { id: 3, name: 'Movie', route: config.routes.movie },
  { id: 4, name: 'Contact', route: config.routes.contact },
  { id: 5, name: 'Search', route: config.routes.search },
  { id: 6, name: 'Live', route: config.routes.live }
]);
</script>

<template>
  <footer class="mx-4">
    <div
      class="grid grid-flow-col mb:grid-flow-row tb:grid-cols-2 dt:grid-cols-2 footer__container border-[1px] border-slate-800 rounded-md p-9"
    >
      <div class="footer__content">
        <ul class="footer__list grid mb:grid-flow-row tb:grid-cols-2">
          <li v-for="item in listItems" :key="item.id" class="footer__item mb-1">
            <router-link
              :to="item.route"
              class="footer__link text-xl leading-5 text-text-color-light-c hover:text-yellow-600 font-medium"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="footer__info flex flex-col items-end gap-2 text-sm text-text-color-light-c">
        <img :src="images.logo" alt="logo" class="w-[122px]" />
        <p class="footer__desc font-medium">
          Discover Movies7, your gateway to free movie streaming! Watch movies online for free with our vast collection.
          Unleash the magic of cinema from the comfort of your home. Lights, camera, strea
        </p>
        <div class="tag__link text-xs">
          <span>Links:</span> watch anime online free, watch anime online free, watch anime online free
        </div>
      </div>
    </div>
    <p class="footer__copy text-center py-5 mb-2 text-sm text-text-color-light-c">
      &#169; 2023 Canqn. All rigths reserved
    </p>
  </footer>
</template>

<style scoped>
.footer__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
