<template>
  <div id="map-test" class="map-test"></div>
</template>
<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue';
import * as d3 from 'd3';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { useCureLine } from './hooks/useCureLine';
// import { Line2 } from 'three/examples/jsm/lines/Line2.js';
// import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
// import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

const scene = new THREE.Scene();
const offsetXY = d3.geoMercator();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const fetchMapAreaData = () => {
  const url = 'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=510000_full';
  fetch(url)
    .then((resp) => {
      if (resp.ok) return resp.json();
    })
    .then((data) => {
      console.log(data, '-------data');
      const map = createMap(data);
      scene.add(map);

      // 鼠标交互
      let intersect = null; // 缓存当前点击的对象
      window.addEventListener('pointerdown', (event) => {
        const pointer = new THREE.Vector2();
        // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        // 通过摄像机和鼠标位置更新射线
        raycaster.setFromCamera(pointer, camera);
        // 计算物体和射线的焦点
        const intersects = raycaster.intersectObjects(map.children).filter((e) => e.object.type !== 'Line');
        // 相交到对象
        if (intersects.length) {
          if (intersects[0].object.type === 'Mesh') {
            if (intersect) isAplha(intersect, 1);
            // 这里通过intersects[0].object去拿到它的父级对象，在设置透明度时将该区域所有的透明度都改变
            intersect = intersects[0].object.parent;
            isAplha(intersect, 0.4);
          }
          if (intersects[0].object.type === 'Sprite') {
            console.log(intersects[0].object, '------点击到Sprite了');
          }
        } else {
          // 没相交到对象
          if (intersect) isAplha(intersect, 1);
        }

        // 设置当前区域的透明度
        function isAplha(intersect, opacity) {
          intersect.children.forEach((item) => {
            if (item.type === 'Mesh') {
              item.material.opacity = opacity;
            }
          });
        }
      });
    });
};

// 创建各区域mesh
function createMesh(data, color, depth) {
  // 使用Shape类来创建一个二维平面
  const shape = new THREE.Shape();
  // data为所有二维数组的经纬度坐标点
  data.forEach((item, index) => {
    const [x, y] = offsetXY(item);
    // 连线--将y坐标倒过来，不然成图看起像是镜像
    if (index === 0) shape.moveTo(x, -y);
    else shape.lineTo(x, -y);
  });

  const extrudeSettings = {
    depth,
    bevelEnabled: false,
  };
  const materialSettings = {
    color,
    // 材质的放射（光）颜色
    emissive: 0x000000,
    // 材质的粗糙程度。0.0表示平滑的镜面反射，1.0表示完全漫反射
    roughness: 0.45,
    // 材质与金属的相似度
    metalness: 0.8,
    transparent: true,
    side: THREE.DoubleSide,
  };
  const shapeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  // 此处使用物理材质
  const shapeMaterial = new THREE.MeshStandardMaterial(materialSettings);
  const mesh = new THREE.Mesh(shapeGeometry, shapeMaterial);
  return mesh;
}

// 创建区域轮廓描边线
function createLine(data, depth) {
  const points = [];
  // data为所有二维数组的经纬度坐标点
  data.forEach((item) => {
    const [x, y] = offsetXY(item);
    // 连线--将y坐标倒过来，不然成图看起像是镜像
    points.push(new THREE.Vector3(x, -y, 0));
  });
  const materialLineUp = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const materialLineDown = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const geometryLine = new THREE.BufferGeometry().setFromPoints(points);

  const lineUp = new THREE.Line(geometryLine, materialLineUp);
  const lineDown = new THREE.Line(geometryLine, materialLineDown);
  lineUp.position.z = depth + 0.0001;
  lineDown.position.z = -0.0001;
  return [lineUp, lineDown];
}

// 创建文字标签
function createLabel(name, point, depth) {
  const div = document.createElement('div');
  div.style.color = '#fff';
  div.style.fontSize = '12px';
  div.style.textShadow = '1px 1px 2px #047cd6';
  div.textContent = name;
  const label = new CSS2DObject(div);
  label.scale.set(0.01, 0.01, 0.01);
  const [x, y] = offsetXY(point);
  label.position.set(x, -y, depth);
  return label;
}

// 创建图标
function createIcon(point, depth) {
  const url = new URL('@/assets/png/icon.png', import.meta.url).href;
  const map = new THREE.TextureLoader().load(url);
  const materialSprite = new THREE.SpriteMaterial({ map: map, transparent: true });

  const sprite = new THREE.Sprite(materialSprite);

  sprite.scale.set(0.5, 0.5, 0.5);
  const [x, y] = offsetXY(point);
  sprite.position.set(x, -y, depth + 0.2);
  // 需要设置渲染顺序，不然会出现背景重叠使png图片出现白框的问题
  sprite.renderOrder = 1;
  return sprite;
}

function createMap(data) {
  const map = new THREE.Object3D();
  // 转换中心点
  const center = data.features[0].properties.centroid;
  offsetXY.center(center).translate([0, 0]);
  const { createFlyLine } = useCureLine();
  data.features.forEach((feature) => {
    // 单位区域变量
    const unit = new THREE.Object3D();

    // 随机颜色与随机厚度
    const color = new THREE.Color(`hsl(
      ${233},
      ${Math.random() * 30 + 55}%,
      ${Math.random() * 30 + 55}%)`).getHex();
    // const depth = Math.random() * 0.7 + 0.3;
    const depth = 1;

    // 中心点及区划名称
    const { centroid, center, name } = feature.properties;
    const centerPoint = centroid || center || [0, 0];
    const label = createLabel(name, centerPoint, depth);
    const icon = createIcon(center, depth);

    // 取出坐标数据进行遍历
    const { coordinates, type } = feature.geometry;
    coordinates.forEach((coordinate) => {
      // MultiPolygon为双层数据,需要多遍历一次
      if (type === 'MultiPolygon') coordinate.forEach((item) => fn(item));
      if (type === 'Polygon') fn(coordinate);

      function fn(coordinate) {
        const mesh = createMesh(coordinate, color, depth);
        const lineArr = createLine(coordinate, depth);
        unit.add(mesh, ...lineArr);
      }
    });
    // 飞线
    if (name !== '成都市') {
      // 成都市作为中心点
      const [cx, cy] = offsetXY([104.065735, 30.659462]);
      // 其它市作为结束点
      const [ex, ey] = offsetXY(centerPoint);
      const featLine = createFlyLine(new THREE.Vector3(cx, -cy, depth), new THREE.Vector3(ex, -ey, depth));
      map.add(featLine);
    }
    map.add(unit, label, icon);
  });
  return map;
}

const initMap = () => {
  // const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xd4e7fd);

  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  const ambientLight = new THREE.AmbientLight(0xd4e7fd, 4);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xe8eaeb, 0.2);
  directionalLight.position.set(0, 10, 5);
  const directionalLight2 = directionalLight.clone();
  directionalLight2.position.set(0, 10, -5);
  const directionalLight3 = directionalLight.clone();
  directionalLight3.position.set(5, 10, 0);
  const directionalLight4 = directionalLight.clone();
  directionalLight4.position.set(-5, 10, 0);
  scene.add(directionalLight);
  scene.add(directionalLight2);
  scene.add(directionalLight3);
  scene.add(directionalLight4);

  camera.position.y = 0;
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('map-test').appendChild(renderer.domElement);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.top = '0px';
  labelRenderer.domElement.style.pointerEvents = 'none';
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('map-test').appendChild(labelRenderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const animate = () => {
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
  });

  // 获取地图数据
  fetchMapAreaData();
};

onMounted(() => {
  initMap();
});
</script>

<style scoped>
.map-test {
  width: 100%;
  height: 100%;
  background-color: #d4e7fd;
}
</style>
