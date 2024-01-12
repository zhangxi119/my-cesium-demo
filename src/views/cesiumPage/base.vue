<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from 'cesium';
import { onMounted } from 'vue';

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNWQyNjQ0Yy1hOTJiLTQ4NWUtYWU2MC0xZjZmYzY5NzBkYmUiLCJpZCI6MTg2NzIxLCJpYXQiOjE3MDM3Mjg3ODh9.M_otewWAbWM4S0F6UDsGkQLPG9tfbqE_vePOG0dbr3E';
  const viewer = new Cesium.Viewer('cesiumContainer', {
    // infoBox: false,
  });
});
</script>

<style>
#cesiumContainer {
  width: calc(100vw);
  height: calc(100vh);
}
</style>
