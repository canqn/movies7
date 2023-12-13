<script setup>
import { ref, computed } from 'vue';
import Button from '../Button';
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['pagechanged']);

const startPage = computed(() => {
  // When on the first page
  if (props.currentPage === 1) {
    return 1;
    // When on the last page
  } else if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons;
    // When in between
  } else {
    return props.currentPage - 1;
  }
});

const pages = computed(() => {
  const range = [];

  for (let i = startPage.value; i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages); i++) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    });
  }

  return range;
});

const isInFirstPage = computed(() => props.currentPage === 1);
const isInLastPage = computed(() => props.currentPage === props.totalPages);
const isPageActive = (page) => props.currentPage === page;

const onClickFirstPage = () => emit('pagechanged', 1);
const onClickPreviousPage = () => emit('pagechanged', props.currentPage - 1);
const onClickPage = (page) => emit('pagechanged', page);
const onClickNextPage = () => emit('pagechanged', props.currentPage + 1);
const onClickLastPage = () => emit('pagechanged', props.totalPages);
</script>

<template>
  <ul class="pagination flex gap-1 justify-center items-center">
    <li v-if="!isInFirstPage" class="pagination-item">
      <Button intent="primary" :disabled="isInFirstPage" @click="onClickFirstPage"
        ><font-awesome-icon :icon="['fas', 'angles-left']"
      /></Button>
    </li>

    <li v-if="!isInFirstPage" class="pagination-item">
      <Button intent="primary" :disabled="isInFirstPage" @click="onClickPreviousPage"
        ><font-awesome-icon :icon="['fas', 'angle-left']"
      /></Button>
    </li>

    <!-- Visible Buttons Start -->
    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <Button
        intent="primary"
        :disabled="page.isDisabled"
        :class="{ 'bg-yellow-color-c text-white': isPageActive(page.name) }"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </Button>
    </li>

    <!-- Visible Buttons End -->

    <li v-if="!isInLastPage" class="pagination-item">
      <Button intent="primary" :disabled="isInLastPage" @click="onClickNextPage"
        ><font-awesome-icon :icon="['fas', 'angle-right']"
      /></Button>
    </li>

    <li v-if="!isInLastPage" class="pagination-item">
      <Button intent="primary" :disabled="isInLastPage" @click="onClickLastPage"
        ><font-awesome-icon :icon="['fas', 'angles-right']"
      /></Button>
    </li>
  </ul>
</template>

<style scoped></style>
