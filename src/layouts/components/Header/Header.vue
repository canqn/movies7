<script setup>
import images from '~/assets/images/index.js';
import Search from '../Search';
import config from '../../../config';
</script>

<template>
  <header class="w-full bg-first-color-c bg-gradient-to-tr border-b-2 border-slate-800">
    <nav class="nav mx-4">
      <div class="top__header py-5 flex justify-between items-center">
        <div class="logo">
          <RouterLink :to="config.routes.movie">
            <img :src="images.logo" alt="logo" class="w-[122px]" />
          </RouterLink>
        </div>
        <div class="user">
          <button class="text-white"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        </div>
      </div>

      <Search />
    </nav>
  </header>
</template>
