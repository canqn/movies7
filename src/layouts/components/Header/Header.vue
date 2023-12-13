<script setup>
import images from '~/assets/images/index.js';
import Search from '../Search';
import config from '../../../config';
import Login from '../Login';
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue';
const search = ref(true);
const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}

const handleSearch = () => {
  search.value = !search.value;
};
</script>

<template>
  <header
    class="w-full bg-first-color-c bg-gradient-to-tr bg-no-repeat bg-cover bg-top"
    :style="{ 'background-image': `url(${images.bgHeader})` }"
  >
    <nav class="nav mx-4">
      <div class="top__header py-5 flex justify-between items-center">
        <div class="logo">
          <RouterLink :to="config.routes.movie">
            <img :src="images.logo" alt="logo" class="w-[122px]" />
          </RouterLink>
        </div>
        <div class="flex gap-4">
          <button class="text-white hover:text-yellow-color-c" @click="handleSearch">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" />
          </button>
          <button class="text-white hover:text-yellow-color-c" @click="setIsOpen">
            <font-awesome-icon icon="fa-solid fa-user" size="xl" />
          </button>
          <button class="text-white hover:text-yellow-color-c">
            <font-awesome-icon icon="fa-solid fa-bars" size="xl" />
          </button>
          <!-- <Login :is-open="isOpen" :set-is-open="setIsOpen" /> -->
          <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
            <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel class="w-full max-w-sm rounded-lg bg-first-color-alt-c p-6">
                <DialogTitle class="text-2xl font-bold text-center mb-4"
                  >SIGN <span class="text-yellow-color-c">IN</span></DialogTitle
                >
                <div class="flex flex-col gap-2 justify-center">
                  <div class="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Username or email"
                      class="w-full text-xs bg-first-color-c px-3 py-2 rounded-sm outline-none outline-[1px] hover:outline hover:outline-text-color-light-c"
                    />
                    <input
                      type="text"
                      placeholder="Your passwords"
                      class="w-full text-xs bg-first-color-c px-3 py-2 rounded-sm outline-none outline-[1px] hover:outline hover:outline-text-color-light-c"
                    />
                  </div>
                  <a href="#" class="hover:text-yellow-color-c text-xs text-text-color-light-c text-center"
                    >Forgot Password</a
                  >
                  <button
                    type="button"
                    class="w-full bg-yellow-color-c rounded-md px-3 py-2 text-first-color-alt-c text-sm font-bold"
                  >
                    Login
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      </div>

      <Search :search="search" />
    </nav>
  </header>
</template>
