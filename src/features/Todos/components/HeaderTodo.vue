<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Button from './Button.vue';
const route = useRoute();

const props = defineProps({ showAddTodo: Boolean, title: String });
// const emit = defineEmits(['toggle-add-task']);
const homePage = computed(() => {
  return route.path === '/' ? true : false;
});
</script>

<template>
  <header class="flex justify-between items-center">
    <h1 class="font-bold text-lg">{{ props.title }}</h1>
    <Button
      v-show="homePage"
      :color="showAddTodo ? 'red' : 'blue'"
      :text="showAddTodo ? 'Close' : 'Add Todo'"
      @btn-click="$emit('toggleAddTodo')"
    ></Button>
  </header>
</template>

<style scoped></style>
