// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

export const useInitGltf = () => {
  const loadGltf = (scene) => {
    loader.load(
      'https://prod-ylzapp-public.oss-cn-zhangjiakou.aliyuncs.com/frontend/steric-material/vision1/车辆.gltf',
      function (gltf) {
        console.log('控制台查看加载gltf文件返回的对象结构', gltf);
        console.log('gltf对象场景属性', gltf.scene);
        // 返回的场景对象gltf.scene插入到threejs场景中
        gltf.scene.scale.set(40, 40, 40);
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.material.emissive = child.material.color;
            child.material.emissiveMap = child.material.map;
            child.material.color.set(0x00ffff);
          }
        });
        gltf.scene.translateX(500);
        gltf.scene.translateY(80);
        scene.add(gltf.scene);
      },
    );
  };
  return {
    loadGltf,
  };
};
