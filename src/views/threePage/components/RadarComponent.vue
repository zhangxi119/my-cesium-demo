<template>
  <div ref="container" class="container"></div>
</template>

<script>
import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default {
  mounted() {
    // 创建Three.js场景
    this.createScene();
  },
  methods: {
    createScene() {
      // 获取容器元素
      const container = this.$refs.container;

      // 创建场景
      const scene = new THREE.Scene();

      // 创建相机
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 5;

      // 创建渲染器
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // 创建平面
      const geometry = new THREE.PlaneGeometry(5, 5, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      // 创建雷达波纹效果
      const circles = [];
      const addCircle = () => {
        const geometry = new THREE.CircleGeometry(1, 64);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
        const circle = new THREE.Mesh(geometry, material);
        scene.add(circle);
        circles.push(circle);
      };

      // 设置相机控件轨道控制器OrbitControls
      // const controls = new OrbitControls(camera, renderer.domElement);

      // 每隔1秒添加一个新的波纹
      setInterval(addCircle, 1000);

      // 渲染场景
      const animate = () => {
        requestAnimationFrame(animate);
        // circles.forEach((circle) => {
        //   if (circle.scale.x > 1) {
        //     circle.scale.x = 0;
        //     circle.scale.y = 0;
        //     console.log(circle.scale.x, '--------circle.scale.x');
        //   }
        //   circle.scale.x += 0.01;
        //   circle.scale.y += 0.01;
        // });
        renderer.render(scene, camera);
      };
      animate();
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
