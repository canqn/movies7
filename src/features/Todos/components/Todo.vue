<script setup>
import { computed } from 'vue';
import { mapGetters, useStore } from 'vuex';
const store = useStore();
const counter = computed(() => {
  return store.getters.todo;
});
const props = defineProps({ todo: Object, onEdit: Function, onDel: Function });
</script>
<template>
  <div class="flex justify-between items-center text-black">
    <div class="flex items-center">
      <!-- <h1>{{ counter.name }}</h1> -->
      <input v-model="todo.action" type="checkbox" />
      <h3 class="ml-2 font-medium mb-0">{{ todo.name }}</h3>
    </div>

    <div class="flex gap-2">
      <button class="button-icon" @click="props.onEdit(props.todo.id)">✏️</button>
      <button class="button-icon" @click="props.onDel(props.todo.id)">❌</button>
    </div>
  </div>
</template>
