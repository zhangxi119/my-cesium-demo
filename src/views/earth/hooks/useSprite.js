import * as THREE from 'three';
import { config } from '../config';

export const useSprite = () => {
  const { R } = config;
  const map = new THREE.TextureLoader().load('src/assets/png/light.png');
  const material = new THREE.SpriteMaterial({ map: map });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(R * 3.0, R * 3.0, 1);

  return {
    sprite,
  };
};
