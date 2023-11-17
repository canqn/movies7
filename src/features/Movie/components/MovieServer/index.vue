<script setup>
const props = defineProps({ episodes: Array, selectedServer: Array });
const emit = defineEmits(['click-server']);

const onClickServer = (server) => {
  emit('click-server', server);
};
</script>

<template>
  <div class="m__server flex flex-col justify-center items-center gap-2 mx-3 mb-5">
    <div class="text-xs text-center">If current server doesn't work please try other servers below.</div>
    <div
      v-for="(item, index) in episodes"
      :key="index"
      class="px-4 py-1 rounded-lg border-[1px] border-slate-700 hover:bg-gradient-to-br from-cyan-500 to-blue-500 cursor-pointer"
      :class="{ ' bg-yellow-color-c hover:bg-none': item === selectedServer }"
      @click="onClickServer(item)"
    >
      <h4 class="font-medium">{{ item.server_name }}</h4>
      <span class="flex items-center text-xs gap-2"><font-awesome-icon icon="fa-solid fa-server" />Server</span>
    </div>
  </div>
</template>
