<script setup>
import { onMounted, ref } from 'vue';
import Button from '../components/Button.vue';
import Todos from '../components/Todos.vue';
import AddTodo from '../components/AddTodo.vue';
import { v4 as uuidv4 } from 'uuid';
const input = ref(null);
const newItem = ref('');
const btnName = ref('Add');
const todoList = ref([]);
const updateItem = ref(null);

const props = defineProps({ showAddTodo: Boolean });
const apiUrl = 'http://localhost:5100/todolist';

onMounted(() => {
  input.value.focus();
});

const fetchTodoList = async () => {
  try {
    const res = await fetch('http://localhost:5100/todolist');

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const addTodo = async (todo) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  const data = await res.json();

  todoList.value = [...todoList.value, data];
  // console.log(todo);
  // todoList.value = [...todoList.value, todo];
};

const handleClick = () => {
  if (newItem.value.trim().length > 0) {
    if (btnName.value === 'Update') {
      handleUpdate(newItem.value);
      newItem.value = '';
      input.value.focus();
      btnName.value = 'Add';
    } else {
      addNewItem();
    }
  }
};

const addNewItem = () => {
  const newItemObject = {
    id: uuidv4(),
    name: newItem.value,
    action: false
  };
  addTodo(newItemObject);
  newItem.value = '';
  input.value.focus();
};

const fetchTodo = async (id) => {
  const res = await fetch(`${apiUrl}/${id}`);

  const data = await res.json();

  return data;
};

const handleEdit = async (id) => {
  if (!id) return;
  updateItem.value = await fetchTodo(id);
  newItem.value = updateItem.value.name;
  btnName.value = 'Update';
  const updTodo = { ...updateItem.value, name: newItem.value };

  const res = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTodo)
  });

  const data = await res.json();
};

const handleUpdate = async (itemUpdate) => {
  todoList.value = todoList.value.map((item) => {
    if (item.id === updateItem.value.id) {
      return { ...item, name: itemUpdate };
    }
    return item;
  });
};

const handelDelete = async (id) => {
  try {
    if (!id) return;
    const { status } = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    if (status === 200) {
      todoList.value = todoList.value.filter((list) => list.id !== id);
    } else {
      alert('Error deleting task');
    }
  } catch (error) {
    console.error(error);
  }
};

const created = async () => {
  const res = await fetchTodoList();
  if (!res) return;
  todoList.value = res;
};
created();
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
    <Todos :todos="todoList" :on-edit="handleEdit" :on-del="handelDelete" />
  </div>
</template>

<style scoped></style>
