<template>
  <div ref="contentRef" class="card"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useThree } from '@/hooks/useThree';

const { renderer } = useThree();

const contentRef = ref(null);

onMounted(() => {
  contentRef.value.appendChild(renderer.domElement);
});

// const
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
}
</style>
