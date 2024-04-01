<template>
  <div id="earth-box" class="earth-box"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useInitScene } from './hooks/useInitScene';

onMounted(() => {
  useInitScene('earth-box');
});
</script>

<style lang="scss" scoped>
.earth-box {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
