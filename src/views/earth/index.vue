<template>
  <div id="earth-box" class="earth-box"></div>
  <el-button v-if="false" @click="handleTemp">下载</el-button>
</template>

<script setup>
import { onMounted } from 'vue';
import { useInitScene } from './hooks/useInitScene';
import { ref } from 'vue';

const handleTemp = ref(null);
onMounted(() => {
  const { handleSave } = useInitScene('earth-box');
  handleTemp.value = handleSave;
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
