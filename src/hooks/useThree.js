import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//引入性能监视器stats.js
import Stats from 'three/addons/libs/stats.module.js';
import { useGui } from './useGui';
import { useModelGroup } from './useModelGroup';
import { useInitGltf } from './useInitGltf';
import { onUnmounted, ref, onMounted } from 'vue';

export const useThree = () => {
  const contentRef = ref(null);
  const scene = new THREE.Scene();
  const { model, floorMesh } = useModelGroup();
  const { loadGltf } = useInitGltf();

  // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
  const width = window.innerWidth; //宽度
  const height = window.innerHeight; //高度

  // 相机： 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
  const camera = new THREE.PerspectiveCamera(30, width / height, 1, 8000);
  // 根据需要设置相机位置具体值
  camera.position.set(0, 200, 1200);
  //相机观察目标指向Threejs 3D空间中某个位置
  camera.lookAt(0, 0, 0); //坐标原点

  // 创建渲染器对象
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x444444, 1); //设置背景颜色

  // 光
  const ambient = new THREE.AmbientLight(0xffffff, 1.0);
  // ambient.position.set(600, 600, 600);

  // 辅助线
  const axesHelper = new THREE.AxesHelper(800);

  loadGltf(scene);
  // 组装画布
  scene.add(axesHelper);
  scene.add(ambient);
  scene.add(model);
  scene.add(floorMesh);

  // 渲染
  renderer.render(scene, camera); //执行渲染操作

  // 可视化调整GUI组件
  const { gui } = useGui();
  gui.add(ambient, 'intensity', 0, 2.0).name('环境光强度');

  // 帧率监控组件：创建stats对象
  const stats = new Stats();
  //stats.domElement:web页面上输出计算结果,一个div元素，
  // document.body.appendChild(stats.domElement);

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件

  // 渲染函数
  function render() {
    stats.update();
    renderer.render(scene, camera); //执行渲染操作
    // model.rotateY(0.01); //每次绕y轴旋转0.01弧度
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  }
  render();

  window.onresize = function () {
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
    // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
    // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
    camera.updateProjectionMatrix();
  };

  const destoryInstance = () => {
    renderer.dispose();
    if (gui.domElement) document.body.removeChild(gui.domElement);
  };

  onMounted(() => {
    contentRef.value.appendChild(renderer.domElement);
    contentRef.value.appendChild(stats.domElement);
  });

  onUnmounted(() => {
    destoryInstance();
  });

  return {
    scene,
    width,
    height,
    camera,
    renderer,
    controls,
    contentRef,
    destoryInstance,
  };
};
