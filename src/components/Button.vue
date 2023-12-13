<script setup>
const props = defineProps({
  text: String,
  color: String
});

const emit = defineEmits(['btn-click']);

const onClick = () => {
  emit('btn-click');
};
</script>

<template>
  <button
    :style="{ background: props.color }"
    class="text-white bg-lime-300 hover:bg-lime-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2"
    @click="onClick()"
  >
    {{ text }}
    <slot />
  </button>
</template>
