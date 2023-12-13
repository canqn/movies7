<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const name = ref('');
const action = ref(false);
const emit = defineEmits(['add-todo']);

const onSubmit = (e) => {
  e.preventDefault();
  if (!name.value) return alert('Please add todo');
  const newTodo = {
    id: uuidv4(),
    name: name.value,
    action: action.value
  };

  emit('add-todo', newTodo);
};
</script>

<template>
  <form class="add-form m-2" @submit="onSubmit">
    <div class="form-control mb-6">
      <label class="block mb-2 text-sm font-medium text-gray-900">Todo name:</label>
      <input
        v-model="name"
        type="text"
        name="name"
        placeholder="Add Todo"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>

    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input
          v-model="action"
          name="action"
          type="checkbox"
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
        />
      </div>
      <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Action</label>
    </div>

    <input
      type="submit"
      value="Save Todo"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    />
  </form>
</template>

<style scoped></style>
