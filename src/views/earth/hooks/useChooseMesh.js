import * as THREE from 'three';
// import { useWorldArea } from './useWorldArea';

export const useChooseMesh = (scene, camera) => {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let chooseMesh = null;
  // const { areaGroup } = useWorldArea();

  const handleClick = (event) => {
    if (chooseMesh) {
      chooseMesh.material.color.set(0x002222);
    }
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length) {
      chooseMesh = intersects[0].object;
      chooseMesh.material.color.set(0x00cccc);
    }
  };

  return {
    handleClick,
  };
};
