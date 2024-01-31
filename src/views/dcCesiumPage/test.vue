<template>
  <div id="dc-box-test" class="dc-box"></div>
</template>

<script setup>
import { onMounted } from 'vue';

let viewer = undefined;
DC.accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNWQyNjQ0Yy1hOTJiLTQ4NWUtYWU2MC0xZjZmYzY5NzBkYmUiLCJpZCI6MTg2NzIxLCJpYXQiOjE3MDM3Mjg3ODh9.M_otewWAbWM4S0F6UDsGkQLPG9tfbqE_vePOG0dbr3E';

function initViewer() {
  viewer = new DC.Viewer('dc-box-test');
  const depth = 20000;
  let baseLayer = DC.ImageryLayerFactory.createImageryLayer(DC.ImageryType.AMAP, {
    style: 'img',
    crs: 'WGS84',
  });

  viewer.setOptions({
    shadows: false, // 是否开启阴影
    showAtmosphere: false, //是否显示大气层
    enableFxaa: true, // 抗锯齿
    globe: {
      // baseColor: DC.Color.BLACK,
      show: true,
      enableLighting: false,
      preloadSiblings: true,
    },
  });
  // 基础图层
  viewer.addBaseLayer(baseLayer);

  // let layerGeo = new DC.GeoJsonLayer('layer', '//geo.datav.aliyun.com/areas_v3/bound/geojson?code=510000_full', {
  //   clampToGround: false,
  //   fill: DC.Color.RED,
  // });
  // viewer.addLayer(layerGeo);

  const url = 'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=510000';
  fetch(url)
    .then((resp) => {
      if (resp.ok) return resp.json();
    })
    .then((res) => {
      console.log(res, '------res');
      const coordinate = res.features[0].geometry.coordinates[0][0];
      const [lng, lat] = res.features[0].properties.center;

      let layer = new DC.VectorLayer('layer');
      viewer.addLayer(layer);

      // 设置地形覆盖物
      const positionStr = coordinate
        .map((e) => {
          const [x, y] = e;
          return `${x},${y},${depth}`;
        })
        .join(';');
      let polygon = new DC.Polygon(positionStr);
      polygon.setStyle({
        material: DC.Color.fromCssColorString('rgb(47,50,54)'),
        extrudedHeight: 0, // 拉升高度,该高度受perPositionHeight属性控制，perPositionHeight为true时相对于position高度进行拉升，高于position时往上，小于时往下
        height: 0,
        perPositionHeight: true, // 该布尔值指定是否使用每个位置的高度,true时由位置高度决定，false时由height属性决定
        zIndex: 0, //层级，仅当`clampToGround(是否贴地属性)`为true时才有效
      });
      polygon.on(DC.MouseEventType.CLICK, (e) => {
        // 重置其它区域样式
        // polygonList.forEach((item) => {
        //   item.setStyle({
        //     material:DC.Color.fromCssColorString("rgb(47,50,54)"),
        //     extrudedHeight: 200000
        //   })
        // })
        console.log(Date.now());
        e.overlay.setStyle({
          material: DC.Color.RED.withAlpha(1),
          extrudedHeight: depth + 5000,
        });
      });
      // 设置边界线
      let polyline = new DC.Polyline(positionStr);
      polyline.setStyle({
        width: 5,
        material: new DC.PolylineLightingTrailMaterialProperty({
          color: DC.Color.GHOSTWHITE,
          speed: 5.0,
        }),
        // 是否贴地
        clampToGround: false,
      });
      // 设置文字点
      const positionPoint = new DC.Position(lng, lat, depth);
      const labelOverlay = new DC.Label(positionPoint, '成都市');
      labelOverlay.setStyle({
        fillColor: DC.Color.FLORALWHITE,
        font: '10px sans-serif',
        // 设置文字像素偏移
        pixelOffset: { x: 0, y: -6 },
        distanceDisplayCondition: {
          near: 0, //最近距离
          far: 100 * depth, //最远距离
        }, //根据距离设置可见
      });
      // 设置动画圆
      let circle = new DC.Circle(positionPoint, 25000);
      circle.setStyle({
        material: new DC.CircleFadeMaterialProperty({
          color: DC.Color.RED.withAlpha(0.3),
          speed: 8.0,
        }),
        height: depth,
        zIndex: 2,
      });

      // 设置流动线
      const startPosition = { lng: lng, lat: lat };
      const endPosition = { lng: 104.630825, lat: 28.760189 };
      // DC.Math.parabola抛物线文档: https://resource.dvgis.cn/dc-api/v2.x/zh/base/#static-methods-5
      const flyLinePosition = DC.Math.parabola(startPosition, endPosition, 50000).map((e) => {
        const [x, y, z] = e;
        return [x, y, z + depth];
      });
      let line = new DC.Polyline(flyLinePosition);
      line.setStyle({
        width: 5,
        material: new DC.PolylineLightingTrailMaterialProperty({
          color: DC.Color.GHOSTWHITE,
          speed: 15,
        }),
        // 是否贴地
        clampToGround: false,
      });

      layer.addOverlays([polygon, polyline, labelOverlay, line, circle]);
      viewer.flyTo(layer);
    });
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
</style>
