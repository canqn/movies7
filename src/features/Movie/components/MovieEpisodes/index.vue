<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
// Props
defineProps({ selectedServer: Object });

const activeIndex = computed(() => store.state.player.activeEpIndex);
const playEpisode = (link, serverData, epIndex) => {
  store.dispatch('player/setSelectEpisode', { data: serverData, activeEpIndex: epIndex });
};
</script>

<template>
  <div class="m__episodes rounded-lg border-[#19212d] border-[1px]">
    <h1 class="font-semibold m-3">Episodes list</h1>
    <ul
      v-if="selectedServer"
      class="episodes flex flex-wrap gap-2 max-h-40 overflow-x-hidden overflow-y-scroll scroll-mt-1 scroll-auto mx-3"
    >
      <li v-for="(ep, epIndex) in selectedServer?.server_data" :key="epIndex" class="text-xs cursor-pointer">
        <a
          class="px-3 py-2 inline-flex text-white items-center gap-2 bg-first-color-alt-c hover:bg-[#19212d]"
          :class="{ ' !bg-yellow-color-c cursor-not-allowed': activeIndex === epIndex }"
          @click="playEpisode(ep.link_embed, ep, epIndex)"
        >
          <font-awesome-icon icon="fa-solid fa-play" />
          <!-- {{ ep.filename }} -->
        </a>
      </li>
    </ul>
  </div>
</template>
