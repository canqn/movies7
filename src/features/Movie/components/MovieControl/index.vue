<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const emit = defineEmits(['update-settings']);
const settings = computed(() => store.state.player.settings);

// Function to toggle status and save in localStorage
const toggleStatus = (key) => {
  // settings.value[key] = !settings.value[key];
  store.dispatch('player/toggleSettings', { key });

  if (key === 'darkTheme') {
    document.body.classList.toggle('dark-mode', settings.value.darkTheme);
  }

  localStorage.setItem('settings_m7', JSON.stringify(settings.value));
  // emit('update-settings', settings.value);
};

// Function để lấy giá trị từ localStorage
function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Retrieve settings from localStorage on component mount
onMounted(() => {
  const storedSettings = getFromLocalStorage('settings_m7');
  if (storedSettings !== null) {
    store.dispatch('player/setSettings', { settings: storedSettings });
  }
});
</script>

<template>
  <div class="m__control flex flex-wrap justify-center gap-2 py-4 bg-first-color-c text-[13.5px] font-thin">
    <div class="m-control auto-play" @click="toggleStatus('autoPlay')">
      <font-awesome-icon :icon="['far', settings.autoPlay ? 'circle-dot' : 'circle']" /> Auto play
    </div>
    <div class="m-control auto-play" @click="toggleStatus('autoNext')">
      <font-awesome-icon :icon="['far', settings.autoNext ? 'circle-dot' : 'circle']" /> Auto Next
    </div>
    <!-- <div class="m-control auto-skip"><font-awesome-icon :icon="['far', 'circle-dot']" /> Auto Skip</div> -->
    <div class="m-control m-light" @click="toggleStatus('darkTheme')">
      <font-awesome-icon :icon="['fas', settings.darkTheme ? 'moon' : 'circle-half-stroke']" />
      {{ settings.darkTheme ? 'Dark' : 'Light' }}
    </div>
    <div class="m-control m-bookmark"><font-awesome-icon :icon="['fas', 'bookmark']" /> Add bookmark</div>
    <div class="m-control m-report"><font-awesome-icon :icon="['fas', 'bug']" /> Report</div>
  </div>
</template>

<style>
.m-control {
  padding: 0.15rem 0.65rem;
  border-radius: 0.5rem;
  border: 1px solid #283447;
  color: rgb(134, 132, 132);
  opacity: 0.5;
  cursor: pointer;
}
.m-control:hover {
  background: rgb(40, 52, 71);
  background: radial-gradient(circle, rgba(40, 52, 71, 0) 0%, rgba(40, 52, 71, 1) 75%, rgba(40, 52, 71, 1) 100%);
}
/* Kiểu cho chế độ tối */
.dark-mode {
  background-color: #000000; /* Màu nền khi chế độ tối được bật */
  color: #868484;
  z-index: 100000; /* Màu văn bản khi chế độ tối được bật */
}
</style>
