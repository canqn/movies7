<script setup>
import images from '~/assets/images';
const props = defineProps({
  className: { type: String },
  srcImg: { type: String, required: true },
  fallback: { type: String, default: images.noImage300 },
  altImg: { type: String }
});

const handleError = (e) => {
  if (e.target.src !== props.fallback) {
    e.target.src = props.fallback;
  }
};
</script>
<template>
  <img :src="srcImg" :class="className" :alt="altImg" loading="lazy" decoding="async" @error="handleError" />
</template>
