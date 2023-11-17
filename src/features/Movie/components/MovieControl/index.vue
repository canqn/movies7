<script setup></script>

<template>
  <div class="m__control flex flex-wrap justify-center gap-2 py-4 bg-first-color-c text-sm font-extralight">
    <div class="m-control auto-play hover:bg-slate-400">
      <font-awesome-icon :icon="['fas', 'circle-dot']" /> Auto play
    </div>
    <div class="m-control auto-next"><font-awesome-icon :icon="['fas', 'circle-dot']" /> Auto Next</div>
    <div class="m-control auto-skip"><font-awesome-icon :icon="['fas', 'circle-dot']" /> Auto Skip</div>
    <div class="m-control m-light"><font-awesome-icon :icon="['fas', 'circle-half-stroke']" /> Light</div>
    <div class="m-control m-bookmark"><font-awesome-icon :icon="['fas', 'bookmark']" /> Add bookmark</div>
    <div class="m-control m-report"><font-awesome-icon :icon="['fas', 'bug']" /> Report</div>
  </div>
</template>

<style>
.m-control {
  padding: 0.15rem 0.65rem;
  border-radius: 0.5rem;
  border: 1px solid #283447;
  opacity: 0.5;
  cursor: pointer;
}
.m-control:hover {
  background: rgb(40, 52, 71);
  background: radial-gradient(circle, rgba(40, 52, 71, 0) 0%, rgba(40, 52, 71, 1) 75%, rgba(40, 52, 71, 1) 100%);
}
</style>
