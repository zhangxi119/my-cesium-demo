import * as THREE from 'three';

export const useChooseMesh = (scene, camera) => {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let chooseMesh = null;

  const handleClick = (event) => {
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
