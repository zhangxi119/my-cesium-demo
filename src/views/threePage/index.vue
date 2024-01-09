<template>
  <div ref="contentRef" class="card"></div>
  <!-- <div class="card">
    <RadarComponent />
  </div> -->
</template>

<script setup>
// import RadarComponent from './components/RadarComponent.vue';
import { useThree } from './hooks/useThree';

const { contentRef } = useThree();
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
}
</style>
