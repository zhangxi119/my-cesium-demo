<template>
  <div class="earth-content">
    <div id="dc-box-china" class="dc-box"></div>
    <div v-if="parentCodeList.length > 0" class="back-btn">
      <el-button @click="handleClickBack" size="small" type="primary">返回</el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from 'vue';
import bgImg from '@/assets/dc-img/black.jpeg';
import { ElMessage } from 'element-plus';
import '@dvgis/yun-dc-sdk/dist/dc.min.css';
import { useTheme } from './hooks/useTheme';

const form = reactive({
  earthVisible: true,
  areaColor: 'rgba(47,50,54, 1)',
  lineColor: 'rgb(149,236,217)',
  pointVisible: true,
  toolbar: false,
});

// 获取Cesium原生库
const { Cesium } = DC.__namespace;
let viewer = undefined;

let layer_china_area = null; // 区域图层
let layerGroup = null; // 图层组
let parentCodeList = ref([]); // 存储下钻区划编码路由
let levelCode = 'china'; // 当前层级
let areaCenter = []; // 点击区域的中心点
// 记录各层级相机角度信息
let levelInfo = {
  china: {
    code: 100000, // 动态区划编码
    lng: 109.39361908621126, // 动态经纬度
    lat: 19.20712059186397, // 动态经纬度
    alt: 7901540, // 相机高度
    heading: 354.97,
    pitch: -80.808,
    depth: 250000, // 控制不同层级下区域块的厚度
    offsetLat: 3, // 相机纬度的偏移量
    pointWidth: 20000, // 不同层级下点位数据圆半径
  },
  province: {
    code: 100000,
    lng: 0,
    lat: 0,
    alt: 2170330.1847381867,
    heading: 354.97,
    pitch: -80.808,
    depth: 80000,
    offsetLat: 3,
    pointWidth: 4000,
  },
  city: {
    code: 100000,
    lng: 0,
    lat: 0,
    alt: 330823,
    heading: 354.97,
    pitch: -80.808,
    depth: 10000,
    offsetLat: 0.5,
    pointWidth: 800,
  },
};

function initMap(code = 100000) {
  // 区域线条
  let layer_china_line = new DC.DynamicLayer('layer_china_line');
  // 图元光锥
  const layer_point = new DC.PrimitiveLayer('layer_point');

  const depth = levelInfo[levelCode].depth;

  const chainDataPromise = Cesium.GeoJsonDataSource.load(
    `https://oss-public.yunlizhi.cn/frontend/yun-design/geojson/china/${code}_full.json`,
    {},
  );
  let now = DC.JulianDate.now();
  const checkRepeat = {};
  chainDataPromise
    .then((dataSource) => {
      layerGroup.remove();
      const entities = dataSource.entities.values;
      entities.forEach((entity) => {
        // 去除大地图零散区域，优化速度
        if (!checkRepeat[entity.name]) {
          checkRepeat[entity.name] = levelCode === 'china';
          if (entity.polygon) {
            let positions = DC.Transform.transformCartesianArrayToWGS84Array(
              // http://cesium.xin/cesium/cn/Documentation1.62/Property.html
              entity.polygon.hierarchy.getValue(now).positions,
            );
            positions.map((item) => {
              item.alt = depth;
            });
            // 线
            let polyline = new DC.Polyline(positions);
            polyline.setStyle({
              material: DC.Color.fromCssColorString('rgba(209, 188, 133, 1)'),
              width: 0.5,
            });
            // 面
            let polygon = DC.Polygon.fromEntity(entity);
            polygon.setStyle({
              material:
                levelCode === 'china'
                  ? DC.Color.fromCssColorString('rgba(255,255,255,0.2)')
                  : DC.Color.fromCssColorString(form.areaColor),
              extrudedHeight: depth,
              height: depth - 1,
              perPositionHeight: levelCode === 'china' ? false : true,
            });
            // 点光锥
            if (form.pointVisible && entity.properties?.center?._value) {
              const centerPosition = DC.Position.fromArray([...entity.properties.center._value, depth + 200]);
              const cylinder = new DC.LightCylinderPrimitive(centerPosition, depth, 1, levelInfo[levelCode].pointWidth);
              cylinder.setStyle({ color: DC.Color.fromRandom() });
              layer_point.addOverlays([cylinder]);
            }
            // 飞线
            if (levelCode === 'province') {
              // eslint-disable-next-line
              const [s1, e1] = entity.properties?.center?._value;
              const [s2, e2] = areaCenter;
              const startPosition = { lng: s1, lat: e1 };
              const endPosition = { lng: s2, lat: e2 };
              const flyLinePosition = DC.Math.parabola(startPosition, endPosition, 50000).map((e) => {
                const [x, y, z] = e;
                return [x, y, z + depth];
              });
              let polylineFly = new DC.Polyline(flyLinePosition);
              polylineFly.setStyle({
                width: 2,
                material: new DC.PolylineLightingTrailMaterialProperty({
                  color: DC.Color.YELLOW,
                  speed: 5.0,
                }),
                clampToGround: false,
              });
              layer_china_line.addOverlay(polylineFly);
            }
            layer_china_area.addOverlay(polygon);
            layer_china_line.addOverlays([polyline]);
          }
        }
      });
      layerGroup.addLayer(layer_china_area);
      layerGroup.addLayer(layer_china_line);
      layerGroup.addLayer(layer_point);
      viewer.addLayerGroup(layerGroup);
      viewer.flyToPosition(levelInfo[levelCode]);
    })
    .catch((e) => {
      console.log(e, '--------error');
      ElMessage.warning('该区域无下钻地图数据，暂无法下钻!');
    });
  // 加载大地图样式
  if (levelCode === 'china') {
    const { initTheme } = useTheme(DC, viewer, depth);
    initTheme();
  }
}

function initViewer() {
  if (viewer) viewer.destroy();
  viewer = new DC.Viewer('dc-box-china');
  viewer.setOptions({
    globe: {
      show: form.earthVisible,
      enableLighting: false,
    },
    enableFxaa: true,
    showSun: true,
    showMoon: true,
    showAtmosphere: true,
    translucency: {
      //地表透明
      enabled: true, // 是否开启地表透明
      backFaceAlpha: 1, // 地球背面透明度
      backFaceAlphaByDistance: null, //根据距离设置地球背面透明度: {near:400,nearValue:0.2,far:800,farValue:1}
      frontFaceAlpha: 1, // 地球正面透明度
      frontFaceAlphaByDistance: null, //根据距离设置地球正面透明度: {near:400,nearValue:0.2,far:800,farValue:1}
    },
  });
  let baseLayer = DC.ImageryLayerFactory.createImageryLayer(DC.ImageryType.SINGLE_TILE, {
    // url: 'https://dc.dvgis.cn/examples/assets/tile/world_n.jpg',
    url: bgImg,
  });
  // 工具栏
  viewer.locationBar.enable = form.toolbar;

  viewer.addBaseLayer(baseLayer);
  const effect = new DC.Effect(viewer);
  effect.bloom.enable = true;

  layer_china_area = new DC.VectorLayer('layer-china-area');
  layerGroup = new DC.LayerGroup('group');

  // 加载地图
  initMap(100000);

  // 加载样式
  // const { initTheme } = useTheme(DC, viewer);
  // initTheme();

  viewer.flyToPosition(levelInfo.china, () => {});

  // 添加区域点击事件
  layer_china_area.on(DC.MouseEventType.CLICK, (e) => {
    // console.log(e);
    // 解析地图数据信息
    const { centroid, adcode, acroutes, level, center } = e.overlay.attr;
    // 底层区域不下钻，修改区域样式
    if (level === 'district') {
      layer_china_area.eachOverlay((item) => {
        item.setStyle({
          material: DC.Color.fromCssColorString(form.areaColor),
        });
      });
      e.overlay.setStyle({
        material: DC.Color.fromCssColorString(form.areaColor).withAlpha(0.5),
      });
      return;
    }
    // 非底层区域
    levelCode = level;
    areaCenter = center;
    initMap(adcode || 100000);
    const [lng, lat] = centroid;
    if (levelInfo[levelCode]) {
      levelInfo[levelCode].code = adcode;
      levelInfo[levelCode].lng = lng;
      levelInfo[levelCode].lat = lat - levelInfo[levelCode].offsetLat;
      parentCodeList.value = acroutes;
    }
  });

  // 非业务图层区域点击
  viewer.on(DC.MouseEventType.CLICK, () => {
    layer_china_area &&
      levelCode === 'city' &&
      layer_china_area.eachOverlay((item) => {
        item.setStyle({
          material: DC.Color.fromCssColorString(form.areaColor),
        });
      });
  });
}

// 点击返回
function handleClickBack() {
  layerGroup.remove();
  const code = parentCodeList.value[parentCodeList.value.length - 1];
  parentCodeList.value.pop();
  for (let key in levelInfo) {
    if (levelInfo[key].code === code) {
      levelCode = key;
      viewer.flyToPosition(levelInfo[key]);
      break;
    }
  }
  initMap(code);
}

function resetParams() {
  layer_china_area = null;
  layerGroup = null;
  parentCodeList.value = [];
  levelCode = 'china';
  areaCenter = [];
}
onMounted(() => {
  DC.ready({
    baseUrl: '../../libs/dc-sdk/resources/',
  }).then(initViewer);
});

watch(
  form,
  () => {
    resetParams();
    initViewer();
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss">
.earth-content {
  width: 100%;
  height: 100%;
  position: relative;
  .dc-box {
    width: 100%;
    height: 100%;
  }
  .back-btn {
    position: absolute;
    top: 56px;
    right: 32px;
    font-size: 14px;
  }
  .logo {
    width: 129px;
    height: 30px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #000000;
    display: flex;
    align-items: center;
  }
}
</style>
