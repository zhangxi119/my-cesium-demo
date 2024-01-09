<template>
  <div id="dc-box" class="dc-box"></div>
</template>

<script setup>
// import * as DC from '@dvgis/dc-sdk';

import { onMounted } from 'vue';

let viewer = undefined;

// 加载瓦片建筑数据
function initTileBuild() {
  let layer_build = new DC.TilesetLayer('layer_build').addTo(viewer);
  let build = new DC.Tileset('https://resource.dvgis.cn/data/3dtiles/ljz/tileset.json');
  let customShader = new DC.CustomShader({
    fragmentShaderText: `
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
         vec4 position = czm_inverseModelView * vec4(fsInput.attributes.positionEC,1); // 位置
         float glowRange = 100.0; // 光环的移动范围(高度)
         vec4 temp = vec4(0.2,  0.5, 1.0, 1.0); // 颜色
         temp *= vec4(vec3(position.z / 100.0), 1.0);  // 渐变
         // 动态光环
         float time = fract(czm_frameNumber / 360.0);
         time = abs(time - 0.5) * 2.0;
         float diff = step(0.005, abs( clamp(position.z / glowRange, 0.0, 1.0) - time));
         material.diffuse = vec3(temp.rgb + temp.rgb * (1.0 - diff)) ;
       }
      `,
  });
  build.setCustomShader(customShader);
  layer_build.addOverlay(build);
}

// 加载底图
function initBaseMapLayer() {
  // 图片底图-0
  let blueBaseLayer = DC.ImageryLayerFactory.createImageryLayer(DC.ImageryType.SINGLE_TILE, {
    url: 'src/assets/dc-img//world_b.jpg',
  });
  viewer.addBaseLayer(blueBaseLayer);
  // 基础底图-1
  // let baseLayer = DC.ImageryLayerFactory.createAmapImageryLayer({
  //   style: 'img',
  //   crs: 'WGS84',
  // });
  // viewer.addBaseLayer(baseLayer);
}

// 近地天空盒
function initSkyBox() {
  const distance = 8000;
  // 框架提供的原默认天空盒
  const defaultSkyBoxes = viewer.skyBox;
  const skyBoxes = {
    positiveX: 'src/assets/dc-img/sky-box/5/right.png',
    negativeX: 'src/assets/dc-img/sky-box/5/left.png',
    positiveY: 'src/assets/dc-img/sky-box/5/down.png',
    negativeY: 'src/assets/dc-img/sky-box/5/up.png',
    positiveZ: 'src/assets/dc-img/sky-box/5/back.png',
    negativeZ: 'src/assets/dc-img/sky-box/5/front.png',
  };
  viewer.on(DC.SceneEventType.POST_RENDER, () => {
    if (viewer.cameraPosition.alt < distance) {
      viewer.setOptions({
        showAtmosphere: false,
        skyBox: {
          sources: skyBoxes, // 六个面的贴图
          show: true, //是否显示
          offsetAngle: 0, //旋转角度
        },
      });
    } else {
      viewer.setOptions({
        showAtmosphere: true,
        skyBox: {
          sources: defaultSkyBoxes, // 六个面的贴图
          show: true, //是否显示
          offsetAngle: 0, //旋转角度
        },
      });
    }
  });
}

// 加载飞线
function initFlyLine() {
  let layer = new DC.PrimitiveLayer('layer').addTo(viewer);
  let center = DC.Position.fromObject({ lng: 121.49536592256028, lat: 31.241616722278213 });
  let positions = [
    { lng: 121.46575474842851, lat: 31.25491511358896 },
    { lng: 121.4813104277516, lat: 31.227003838010212 },
    { lng: 121.50657363869442, lat: 31.227646614453125 },
    { lng: 121.52418391477424, lat: 31.25831768661698 },
    { lng: 121.51534816216447, lat: 31.238932318412797 },
    { lng: 121.47411195956543, lat: 31.23653254767207 },
    { lng: 121.4948618756933, lat: 31.22694576870397 },
    { lng: 121.49695060106232, lat: 31.275195479192174 },
  ];
  let doublePositions = [...positions, ...positions];
  doublePositions.forEach((item) => {
    let line = new DC.FlowLinePrimitive(DC.Math.parabola(center, item, 500), 3);
    line.setStyle({
      speed: 5 * Math.random(),
      color: new DC.Color(0.5, 0.8, 1.0, 1.0),
    });
    layer.addOverlay(line);
  });
}

// 加载雷达波
function initRaderLayer() {
  let layerRadar = new DC.VectorLayer('layer').addTo(viewer);
  let center = DC.Position.fromObject({ lng: 121.49536592256028, lat: 31.241616722278213 });
  let circle = new DC.Circle(center, 3000);
  circle.setStyle({
    material: new DC.CircleDiffuseMaterialProperty({
      color: DC.Color.RED.withAlpha(0.2),
      speed: 8.0,
    }),
  });
  layerRadar.addOverlay(circle);
}

// 主视窗初始化
function initViewer() {
  viewer = new DC.Viewer('dc-box');
  viewer.setOptions({
    shadows: true, // 是否开启阴影
    showAtmosphere: true, //是否显示大气层
    globe: {
      // baseColor: DC.Color.BLACK,
      enableLighting: false,
      preloadSiblings: true,
    },
  });
  // 建筑
  initTileBuild();
  // 飞线
  initFlyLine();
  // 雷达波
  initRaderLayer();
  // 底图
  initBaseMapLayer();
  // 天空盒子
  initSkyBox();

  setTimeout(() => {
    // 切换底图
    // viewer.changeBaseLayer(1);
    const position = DC.Position.fromObject({
      lng: 121.54062794498553,
      lat: 31.259803922429953,
      alt: 716.4907622923589,
      heading: 242.1585277254835,
      pitch: -9.426917211029965,
      roll: 0.0011166128298720265,
    });
    // 相机移动
    viewer.flyToPosition(position);
  }, 5000);
  // 监听相机位置
  viewer.on(DC.SceneEventType.CAMERA_CHANGED, () => {});
}

onMounted(() => {
  DC.ready().then(initViewer);
});
</script>

<style lang="scss">
.dc-box {
  width: 100vw;
  height: 100vh;
}
.map-switch {
  display: none;
}
</style>
