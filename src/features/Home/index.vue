<script setup>
import { ref } from 'vue';
import Home from './Home.vue';
import HeaderTodo from '../../components/HeaderTodo.vue';
const showAddTodo = ref(false);

const toggleAddTodo = () => {
  showAddTodo.value = !showAddTodo.value;
};
</script>

<template>
  <div class="wrapper">
    <HeaderTodo title="Test" :show-add-todo="showAddTodo" @toggle-add-todo="toggleAddTodo" />
    <Home :show-add-todo="showAddTodo" />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
