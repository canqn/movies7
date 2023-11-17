<script setup>
// Props
defineProps({ selectedServer: Array, activeEpisodeIndex: Number });
//emit
const emit = defineEmits(['play-episode']);

const playEpisode = (link, epIndex) => {
  emit('play-episode', link, epIndex);
};
</script>

<template>
  <div class="m__episodes rounded-lg border-[#19212d] border-[1px]">
    <h1 class="font-semibold m-3">Episodes list</h1>
    <ul
      v-if="selectedServer"
      class="episodes flex flex-wrap gap-2 max-h-40 overflow-x-hidden overflow-y-scroll scroll-mt-1 scroll-auto"
    >
      <li v-for="(ep, epIndex) in selectedServer.server_data" :key="epIndex" class="text-xs cursor-pointer">
        <a
          class="px-3 py-2 inline-flex text-white items-center gap-2 bg-first-color-alt-c hover:bg-[#19212d]"
          :class="{ ' bg-yellow-color-c': activeEpisodeIndex === epIndex }"
          @click="playEpisode(ep.link_embed, epIndex)"
        >
          <font-awesome-icon icon="fa-solid fa-play" />
          <span>Eps {{ ep.name }}: </span>
          {{ ep.filename }}
        </a>
      </li>
    </ul>
  </div>
</template>
