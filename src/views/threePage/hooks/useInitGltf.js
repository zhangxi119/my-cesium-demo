// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import IndexDB from '@/utils/indexDb';
import * as THREE from 'three';

const url =
  'https://prod-ylzapp-public.oss-cn-zhangjiakou.aliyuncs.com/frontend/steric-material/vision1/园区建模优化.  ';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

let dbInstance = new IndexDB('gltfZx');
const initIndexDB = () => {
  return new Promise((resolve) => {
    dbInstance.initIndexDB(() => {
      resolve();
    });
  });
};

const jsonLoader = new THREE.ObjectLoader();

export const useInitGltf = async (scene) => {
  await initIndexDB();
  const cacheData = (await dbInstance.getData(url)) || null;
  const cache = cacheData?.target?.result;
  if (cache) {
    jsonLoader.parse(cache, (gltfMesh) => {
      gltfMesh.traverse(function (mesh) {
        if (mesh.isMesh) {
          mesh.material.envMap = scene.environment;
        }
      });
      scene.add(gltfMesh);
    });
  } else {
    const loadGltf = () => {
      loader.load(url, async function (gltf) {
        console.log('控制台查看加载gltf文件返回的对象结构', gltf);
        console.log('gltf对象场景属性', gltf.scene);
        // 返回的场景对象gltf.scene插入到threejs场景中
        // gltf.scene.scale.set(40, 40, 40);
        gltf.scene.traverse(function (mesh) {
          if (mesh.isMesh) {
            // mesh.material.emissive = mesh.material.color;
            // mesh.material.emissiveMap = mesh.material.map;
            // mesh.material.envMapIntensity = 1.0;
            mesh.material.envMap = scene.environment;
          }
        });
        await dbInstance.setData(url, gltf.scene.clone().toJSON());
        scene.add(gltf.scene);
      });
    };
    loadGltf();
  }
};
