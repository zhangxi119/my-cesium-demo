import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useEarth } from './useEarth';

export const useInitScene = (elementId) => {
  // 场景
  const scene = new THREE.Scene();
  // 挂载元素
  const element = document.getElementById(elementId);
  // 渲染器
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(element.offsetWidth, element.offsetHeight);
  renderer.setClearColor(0x000000, 1);

  const camera = new THREE.PerspectiveCamera(75, element.offsetWidth / element.offsetHeight, 0.1, 1000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const axesHelper = new THREE.AxesHelper(100);
  // 光源设置-环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  // 平行光1
  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight1.position.set(400, 200, 300);
  scene.add(directionalLight1);
  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight2.position.set(-400, -200, -300);
  scene.add(directionalLight2);

  scene.add(axesHelper);
  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  element.appendChild(renderer.domElement);
  animate();

  // 加载球体
  const { earthGroup } = useEarth();
  scene.add(earthGroup);

  return {
    scene,
    renderer,
    animate,
  };
};
