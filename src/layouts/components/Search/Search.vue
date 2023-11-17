<script setup></script>

<template>
  <div class="search__wrap flex items-center justify-center">
    <div class="search__box flex bg-first-color-alt-c p-2 rounded-t-2xl w-full max-w-2xl">
      <a href="#" class="bg-yellow-color-c text-xs font-bold px-3 py-2 rounded-lg inline-flex items-center gap-1"
        ><font-awesome-icon :icon="['fas', 'filter']" />Filter</a
      >
      <input
        type="text"
        placeholder="Search movies..."
        class="w-full py-1 px-2 bg-first-color-alt-c outline-none border-none text-sm font-normal text-text-color-light-c"
      />
      <button class="text-text-color-light-c"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    </div>
  </div>
</template>

<style scoped></style>
