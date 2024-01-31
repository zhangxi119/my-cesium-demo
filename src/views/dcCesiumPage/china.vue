<template>
  <div class="earth-content">
    <div id="dc-box-china" class="dc-box"></div>
    <div v-if="parentCodeList.length > 0" class="back-btn">
      <el-button @click="handleClickBack" size="small" type="primary">返回</el-button>
    </div>
    <div class="logo">
      <svg width="129" height="24" viewBox="0 0 129 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0001 9C14.0001 10.1046 13.1046 11 12.0001 11C10.8955 11 10.0001 10.1046 10.0001 9V4C10.0001 2.89543 10.8955 2 12.0001 2C13.1046 2 14.0001 2.89543 14.0001 4V9ZM13.5981 15.2321C12.6416 14.6798 12.3138 13.4566 12.8661 12.5C13.4184 11.5434 14.6416 11.2157 15.5981 11.7679L19.9283 14.2679C20.8849 14.8202 21.2126 16.0434 20.6603 17C20.108 17.9566 18.8849 18.2843 17.9283 17.7321L13.5981 15.2321ZM11.134 12.5C10.5818 11.5434 9.35858 11.2157 8.40199 11.7679L4.07187 14.2679C3.11528 14.8202 2.78753 16.0434 3.33982 17C3.8921 17.9566 5.11528 18.2843 6.07187 17.7321L10.402 15.2321C11.3586 14.6798 11.6863 13.4566 11.134 12.5Z"
          fill="#06B880"
          fill-opacity="0.2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5981 12.232C14.6416 12.7843 13.4184 12.4566 12.8661 11.5C12.3138 10.5434 12.6416 9.3202 13.5981 8.76792L17.9283 6.26792C18.8849 5.71563 20.108 6.04338 20.6603 6.99997C21.2126 7.95655 20.8849 9.17973 19.9283 9.73202L15.5981 12.232ZM10.0001 15C10.0001 13.8954 10.8955 13 12.0001 13C13.1046 13 14.0001 13.8954 14.0001 15V20C14.0001 21.1045 13.1046 22 12.0001 22C10.8955 22 10.0001 21.1045 10.0001 20V15ZM11.134 11.5C11.6863 10.5434 11.3586 9.3202 10.402 8.76792L6.07187 6.26792C5.11528 5.71563 3.8921 6.04338 3.33982 6.99997C2.78753 7.95655 3.11528 9.17973 4.07187 9.73202L8.40199 12.232C9.35858 12.7843 10.5818 12.4566 11.134 11.5Z"
          fill="#06B880"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94.4495 18C95.0432 18 95.6071 17.9247 96.1414 17.7742C96.6757 17.6237 97.1452 17.3925 97.55 17.0806C97.9548 16.7688 98.2759 16.3763 98.5133 15.9032C98.7508 15.4301 98.8695 14.8763 98.8695 14.2419C98.8695 13.5753 98.74 13.043 98.481 12.6452C98.2219 12.2473 97.8954 11.9301 97.5014 11.6935C97.1075 11.457 96.6838 11.2742 96.2305 11.1452C95.7771 11.0161 95.3535 10.8871 94.9595 10.7581C94.5656 10.629 94.2391 10.4731 93.98 10.2903C93.721 10.1075 93.5914 9.84409 93.5914 9.5C93.5914 9.28495 93.6454 9.10215 93.7533 8.95161C93.8613 8.80108 94.0016 8.68011 94.1743 8.58871C94.347 8.49731 94.5305 8.43011 94.7248 8.3871C94.9191 8.34409 95.1079 8.32258 95.2914 8.32258C95.6044 8.32258 95.9363 8.38441 96.2871 8.50806C96.6379 8.63172 96.9159 8.82258 97.121 9.08065L98.8533 7.19355C98.3676 6.76344 97.8225 6.45699 97.2181 6.27419C96.6137 6.0914 95.9876 6 95.34 6C94.7787 6 94.2337 6.07796 93.7048 6.23387C93.1759 6.38978 92.709 6.62366 92.3043 6.93548C91.8995 7.24731 91.5757 7.63441 91.3329 8.09677C91.09 8.55914 90.9686 9.09677 90.9686 9.70968C90.9686 10.3441 91.1008 10.8548 91.3652 11.2419C91.6297 11.629 91.9616 11.9409 92.361 12.1774C92.7603 12.414 93.1921 12.6022 93.6562 12.7419C94.1203 12.8817 94.5521 13.0215 94.9514 13.1613C95.3508 13.3011 95.6827 13.4704 95.9471 13.6694C96.2116 13.8683 96.3438 14.1398 96.3438 14.4839C96.3438 14.6882 96.2925 14.8656 96.19 15.0161C96.0875 15.1667 95.9525 15.2903 95.7852 15.3871C95.6179 15.4839 95.429 15.5565 95.2186 15.6048C95.0081 15.6532 94.8003 15.6774 94.5952 15.6774C94.1743 15.6774 93.7668 15.5833 93.3729 15.3952C92.9789 15.207 92.6524 14.9409 92.3933 14.5968L90.5962 16.5645C91.1467 17.0699 91.7403 17.4355 92.3771 17.6613C93.014 17.8871 93.7048 18 94.4495 18ZM33.8324 17.7097V12.8387L38.139 6.29032H35.1438L32.5695 10.5645L30.141 6.29032H27L31.3067 12.8387V17.7097H33.8324ZM43.8219 18C44.6098 18 45.306 17.8817 45.9105 17.6452C46.5149 17.4086 47.0195 17.0806 47.4243 16.6613C47.829 16.2419 48.134 15.7473 48.339 15.1774C48.5441 14.6075 48.6467 13.9839 48.6467 13.3065V6.29032H46.121V13.2097C46.121 13.5645 46.0643 13.8925 45.951 14.1935C45.8376 14.4946 45.6784 14.7554 45.4733 14.9758C45.2683 15.1962 45.0254 15.3683 44.7448 15.4919C44.4641 15.6156 44.1565 15.6774 43.8219 15.6774C43.4873 15.6774 43.177 15.6156 42.891 15.4919C42.6049 15.3683 42.3594 15.1962 42.1543 14.9758C41.9492 14.7554 41.79 14.4946 41.6767 14.1935C41.5633 13.8925 41.5067 13.5645 41.5067 13.2097V6.29032H38.981V13.3065C38.981 13.9839 39.0835 14.6075 39.2886 15.1774C39.4937 15.7473 39.7986 16.2419 40.2033 16.6613C40.6081 17.0806 41.1127 17.4086 41.7171 17.6452C42.3216 17.8817 43.0232 18 43.8219 18ZM53.5038 9.58065V17.7097H50.9781V6.29032H54.4105L59.2838 14.2258H59.3162V6.29032H61.8419V17.7097H58.539L53.5362 9.58065H53.5038ZM65.4038 17.8065C65.6089 17.8065 65.8032 17.7688 65.9867 17.6935C66.1702 17.6183 66.3294 17.5134 66.4643 17.379C66.5992 17.2446 66.7044 17.086 66.78 16.9032C66.8556 16.7204 66.8933 16.5269 66.8933 16.3226C66.8933 16.1183 66.8556 15.9247 66.78 15.7419C66.7044 15.5591 66.5992 15.4005 66.4643 15.2661C66.3294 15.1317 66.1702 15.0269 65.9867 14.9516C65.8032 14.8763 65.6089 14.8387 65.4038 14.8387C65.1987 14.8387 65.0044 14.8763 64.821 14.9516C64.6375 15.0269 64.4783 15.1317 64.3433 15.2661C64.2084 15.4005 64.1032 15.5591 64.0276 15.7419C63.9521 15.9247 63.9143 16.1183 63.9143 16.3226C63.9143 16.5269 63.9521 16.7204 64.0276 16.9032C64.1032 17.086 64.2084 17.2446 64.3433 17.379C64.4783 17.5134 64.6375 17.6183 64.821 17.6935C65.0044 17.7688 65.1987 17.8065 65.4038 17.8065ZM75.539 17.3387C74.7619 17.586 73.947 17.7097 73.0943 17.7097H68.9657V6.29032H72.7543C73.6717 6.29032 74.5433 6.39247 75.369 6.59677C76.1948 6.80108 76.9152 7.13172 77.5305 7.58871C78.1457 8.0457 78.6341 8.63978 78.9957 9.37097C79.3573 10.1022 79.5381 10.9892 79.5381 12.0323C79.5381 12.957 79.3627 13.7715 79.0119 14.4758C78.6611 15.1801 78.1889 15.7715 77.5952 16.25C77.0016 16.7285 76.3162 17.0914 75.539 17.3387ZM72.8029 15.3871H71.4914V8.6129H72.981C73.5098 8.6129 74.0144 8.68011 74.4948 8.81452C74.9751 8.94892 75.3933 9.15054 75.7495 9.41935C76.1057 9.68817 76.389 10.0296 76.5995 10.4435C76.81 10.8575 76.9152 11.3441 76.9152 11.9032C76.9152 12.5484 76.81 13.0941 76.5995 13.5403C76.389 13.9866 76.1003 14.3468 75.7333 14.621C75.3663 14.8952 74.9319 15.0914 74.43 15.2097C73.9281 15.328 73.3857 15.3871 72.8029 15.3871ZM89.4305 15.3871V17.7097H81.3514V6.29032H89.139V8.6129H83.8771V10.7419H88.8476V13.0645H83.8771V15.3871H89.4305ZM103.241 6.29032V17.7097H100.715V6.29032H103.241ZM111.11 18C111.951 18 112.777 17.914 113.587 17.7419C114.396 17.5699 115.173 17.2903 115.918 16.9032V10.9355H111.433V13.2581H113.49V15.1129C113.252 15.2419 112.934 15.3683 112.534 15.4919C112.135 15.6156 111.66 15.6774 111.11 15.6774C110.57 15.6774 110.081 15.586 109.644 15.4032C109.207 15.2204 108.832 14.9651 108.519 14.6371C108.206 14.3091 107.966 13.922 107.799 13.4758C107.631 13.0296 107.548 12.5376 107.548 12C107.548 11.4731 107.631 10.9839 107.799 10.5323C107.966 10.0806 108.206 9.69086 108.519 9.3629C108.832 9.03495 109.207 8.77957 109.644 8.59677C110.081 8.41398 110.57 8.32258 111.11 8.32258C111.757 8.32258 112.297 8.41398 112.729 8.59677C113.16 8.77957 113.549 9.04839 113.894 9.40323L115.675 7.46774C115.092 6.93011 114.415 6.55108 113.643 6.33065C112.872 6.11022 112.027 6 111.11 6C110.214 6 109.388 6.13978 108.632 6.41935C107.877 6.69892 107.224 7.09946 106.673 7.62097C106.123 8.14247 105.694 8.77419 105.386 9.51613C105.079 10.2581 104.925 11.086 104.925 12C104.925 12.914 105.079 13.7419 105.386 14.4839C105.694 15.2258 106.123 15.8575 106.673 16.379C107.224 16.9005 107.877 17.3011 108.632 17.5806C109.388 17.8602 110.214 18 111.11 18ZM120.662 9.58065V17.7097H118.136V6.29032H121.569L126.442 14.2258H126.474V6.29032H129V17.7097H125.697L120.694 9.58065H120.662Z"
          fill="#222222"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from 'vue';
import { ElMessage } from 'element-plus';
import importCoordinate from './assets/json';
import '@dvgis/dc-sdk/dist/dc.min.css';
// import '@dvgis/dc-sdk/dist/dc.min.js';
// import * as DC from '@dvgis/dc-sdk'

const form = reactive({
  earthVisible: false,
  areaColor: 'rgb(47,50,54)',
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
    depth: 200000, // 控制不同层级下区域块的厚度
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

  // let chainData = new DC.GeoJsonLayer('china', `https://geo.datav.aliyun.com/areas_v3/bound/${code}_full.json`);
  // const chainDataPromise =  Cesium.GeoJsonDataSource.load(`/zh-CN/examples/components/earth-3d/assets/json/${code}_full.json`,{});
  const chainDataPromise = Cesium.GeoJsonDataSource.load(importCoordinate(code)(), {});

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
              material: new DC.PolylineFlickerMaterialProperty({
                speed: 10 * Math.random(),
                color: DC.Color.YELLOW,
              }),
            });
            // 发光线
            let polylineLight = new DC.Polyline(positions);
            polylineLight.setStyle({
              width: 1,
              material: new DC.PolylineTrailMaterialProperty({
                speed: 2,
                color: DC.Color.fromCssColorString(form.lineColor),
              }),
            });
            // 面
            let polygon = DC.Polygon.fromEntity(entity);
            polygon.setStyle({
              material: DC.Color.fromCssColorString(form.areaColor),
              extrudedHeight: depth,
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
            layer_china_line.addOverlays([polylineLight, polyline]);
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
}

function initViewer() {
  if (viewer) viewer.destroy();
  viewer = new DC.Viewer('dc-box-china');
  viewer.setOptions({
    globe: {
      show: form.earthVisible,
    },
  });
  let baseLayer = DC.ImageryLayerFactory.createAmapImageryLayer({
    style: 'img',
  });
  // 工具栏
  viewer.locationBar.enable = form.toolbar;

  viewer.addBaseLayer(baseLayer);

  layer_china_area = new DC.VectorLayer('layer-china-area');
  layerGroup = new DC.LayerGroup('group');

  // 加载地图
  initMap(100000);

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
