<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import Button from '../components/Button.vue';
import Todos from '../components/Todos.vue';
import AddTodo from '../components/AddTodo.vue';
import { v4 as uuidv4 } from 'uuid';

const store = useStore();
const input = ref(null);
const newItem = ref('');
const btnName = ref('Add');
const updateItem = ref({});

const props = defineProps({ showAddTodo: Boolean });

onMounted(() => {
  input.value.focus();
});

const fetchTodos = async () => {
  await store.dispatch('fetchTodos');
};
fetchTodos();

const todos = computed(() => {
  console.log('testtdo', store.state.todos);
  return store.getters.getAllTodo;
});

const todo = computed(() => {
  console.log('todo sss', store.state.todo);
  return store.getters.getTodo;
});
// const test = computed(() => store.getters.ge);

const addTodo = async () => {
  try {
    const todo = {
      id: uuidv4(),
      name: newItem.value,
      action: false
    };
    await store.dispatch('addTodo', { todo });
    newItem.value = '';
    input.value.focus();
  } catch (error) {
    console.error(error);
  }
};

const handleClick = async () => {
  if (newItem.value.trim().length > 0) {
    if (btnName.value === 'Update') {
      const upTodo = { ...updateItem.value, name: newItem.value };
      handleUpdate(updateItem.value.id, upTodo);
      newItem.value = '';
      input.value.focus();
      btnName.value = 'Add';
    } else {
      addTodo();
    }
  }
};

const handleEdit = async (id) => {
  if (!id) return;
  await store.dispatch('getTodo', { id });
  updateItem.value = todo.value;
  newItem.value = todo.value.name;
  btnName.value = 'Update';
};

const handleUpdate = async (id, itemUpdate) => {
  await store.dispatch('updateTodo', { id, itemUpdate });
};

const handelDelete = async (id) => {
  try {
    await store.dispatch('removeTodo', { id });
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <AddTodo v-show="showAddTodo" @add-todo="addTodo" />
  <div class="content grid justify-center items-center my-5">
    <div class="form-add flex gap-2 items-center">
      <input
        ref="input"
        v-model="newItem"
        type="text"
        placeholder="add items"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      />
      <Button @btn-click="handleClick">{{ btnName }}</Button>
    </div>
    <Todos :todos="todos" :on-edit="handleEdit" :on-del="handelDelete" />
  </div>
</template>

<style scoped></style>
