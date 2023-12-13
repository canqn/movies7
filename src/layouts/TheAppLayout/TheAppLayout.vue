<script setup>
import { DefaultLayout } from '../index';
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    try {
      const component = metaLayout && metaLayout;
      layout.value = markRaw(component || DefaultLayout);
    } catch (e) {
      layout.value = markRaw(DefaultLayout);
    }
  },
  { immediate: true }
);
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>
