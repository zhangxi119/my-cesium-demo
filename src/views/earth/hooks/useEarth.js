import * as THREE from 'three';
import earthImg from '@/assets/png/world-bg.png';
import { config } from '../config';
import { useWorldArea } from './useWorldArea';
import { useSprite } from './useSprite';

export const useEarth = () => {
  const { R } = config;
  function createEarthMesh() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earthImg);
    const geometry = new THREE.SphereGeometry(R, 40, 40);
    const material = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
  }
  const earthGroup = new THREE.Group();

  const earthMesh = createEarthMesh();
  earthGroup.add(earthMesh);
  const { lineGroup, areaGroup } = useWorldArea();
  earthGroup.add(areaGroup, lineGroup);

  // 光圈
  const { sprite } = useSprite();
  earthGroup.add(sprite);
  return {
    earthGroup,
  };
};
