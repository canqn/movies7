<script setup>
import Todo from './Todo.vue';
const props = defineProps({
  todos: { type: Array },
  onEdit: { type: Function },
  onDel: { type: Function }
});
</script>

<template>
  <div
    v-for="(todo, index) in todos"
    :key="index"
    class="todos p-3 mb-1 bg-slate-50 border-l-8 border-lime-300 rounded-md"
  >
    <Todo :todo="todo" :on-edit="props.onEdit" :on-del="props.onDel" />
  </div>
</template>

<style scoped></style>
