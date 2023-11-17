<script setup>
const props = defineProps({ todo: { type: Object }, onEdit: { type: Function }, onDel: { type: Function } });
</script>
<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <input v-model="props.todo.action" type="checkbox" />
      <h3 class="ml-2 font-medium">{{ props.todo.name }}</h3>
    </div>

    <div class="flex gap-2">
      <button class="button-icon" @click="props.onEdit(props.todo.id)">✏️</button>
      <button class="button-icon" @click="props.onDel(props.todo.id)">❌</button>
    </div>
  </div>
</template>
