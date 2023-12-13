<script setup>
import config from '../config';

console.log(config.routes);
const props = defineProps({ logo: { type: String, default: 'Logo' } });
</script>

<template>
  <header class="header bg-slate-300 border-gray-200 px-4 lg:px-6 py-2.5">
    <nav class="nav flex flex-wrap justify-between h-10 items-center mx-auto max-w-screen-xl">
      <a href="#" class="nav-logo text-white font-bold uppercase inline-flex items-center gap-x-2 delay-300">{{
        props.logo
      }}</a>

      <div class="nav__menu">
        <ul class="nav__list flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li class="nav__item">
            <router-link
              to="/"
              class="nav__link block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
              >Home</router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/about" class="nav__link">About</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/contact" class="nav__link">Contact</router-link>
          </li>
        </ul>
      </div>

      <div class="nav__btns text-white">
        <button>Click</button>
      </div>
    </nav>
  </header>
</template>
<style scoped></style>
