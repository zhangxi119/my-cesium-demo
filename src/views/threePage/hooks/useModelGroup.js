import * as THREE from 'three';
import img from '@/assets/vue.svg';

export const useModelGroup = () => {
  // 批量创建多个长方体表示高层楼
  const group1 = new THREE.Group(); //所有高层楼的父对象
  group1.name = '高层';
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load(img);
  texture.encoding = THREE.sRGBEncoding;
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 60, 10);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.5, //表面粗糙度
      color: 0x00ffff,
      map: texture,
    });
    const mesh = new THREE.Mesh(geometry, material);
    if (i === 2) {
      mesh.visible = false;
    }
    mesh.position.x = i * 30; // 网格模型mesh沿着x轴方向阵列
    group1.add(mesh); //添加到组对象group1
    mesh.name = i + 1 + '号楼';
    // console.log('mesh.name',mesh.name);
  }
  group1.position.y = 30;

  const group2 = new THREE.Group();
  group2.name = '洋房';
  // 批量创建多个长方体表示洋房
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 30, 10);
    const material = new THREE.MeshLambertMaterial({
      // color: 0x00ffff,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 30;
    group2.add(mesh); //添加到组对象group2
    mesh.name = i + 6 + '号楼';
  }
  group2.position.z = 50;
  group2.position.y = 15;

  const model = new THREE.Group();
  model.name = '小区房子';
  model.add(group1, group2);
  model.position.set(0, 0, 0);

  // 地板,使用texture的阵列repeat功能创建地板
  const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
  planeGeometry.rotateX(-Math.PI / 2);
  const floorTexture = texLoader.load(img);
  // 设置阵列模式
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  // uv两个方向纹理重复数量
  floorTexture.repeat.set(12, 12); //注意选择合适的阵列数量
  const floorMaterial = new THREE.MeshLambertMaterial({
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: floorTexture, //map表示材质的颜色贴图属性
    transparent: true,
    side: THREE.DoubleSide,
  });
  const floorMesh = new THREE.Mesh(planeGeometry, floorMaterial);
  // floorMesh.rotateY(45);

  return {
    model,
    floorMesh,
  };
};
