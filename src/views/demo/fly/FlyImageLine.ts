import * as THREE from 'three';
import FlyBase from './FlyBase';
import TWEEN from '@tweenjs/tween.js';
import img from '@/assets/png/icon.png';

interface flyLineBegin2End {
  begin: number[];
  end: number[];
  height: number;
}

interface optionInterface {
  routeColor: string;
  flyColor: string;
  cycle: number;
}

export default class FlyImageLine extends FlyBase {
  data: flyLineBegin2End[];
  scene: THREE.Scene;
  ThreeGroup: THREE.Group;
  cycle: number;

  constructor(scene: THREE.Scene, data: Array<flyLineBegin2End>, options?: optionInterface) {
    super();
    this.data = data;
    this.scene = scene;
    this.ThreeGroup = new THREE.Group();

    this.cycle = options?.cycle || 2000;
    this.scene.add(this._draw());
    // this._animate();
  }
  _draw() {
    this.data.forEach((item) => {
      const { begin: startPoint, end: endPoint, height: curveH } = item;
      // 创建管道
      const pointLine = [
        new THREE.Vector3(startPoint[0], startPoint[1], 0),
        new THREE.Vector3((startPoint[0] + endPoint[0]) / 2, (startPoint[1] + endPoint[1]) / 2, curveH),
        new THREE.Vector3(endPoint[0], endPoint[1], 0),
      ];
      const curve = new THREE.CatmullRomCurve3(pointLine);
      const geometry = new THREE.TubeGeometry(curve, 100, 0.05, 2, false);
      //纹理贴图加载器TextureLoader
      const texLoader = new THREE.TextureLoader();
      // .load()方法加载图像，返回一个纹理对象Texture
      const texture = texLoader.load(img);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(100, 2);
      // texture.rotation = Math.PI / 2;
      const material = new THREE.MeshLambertMaterial({
        // 设置纹理贴图：Texture对象作为材质map属性的属性值
        map: texture, //map表示材质的颜色贴图属性
        transparent: true,
      });
      this.ThreeGroup.add(new THREE.Mesh(geometry, material));

      const tween = new TWEEN.Tween({ x: 0 })
        .to({ x: 100 }, this.cycle)
        .onUpdate(function () {
          texture.offset.x -= 0.02;
        })
        .repeat(Infinity);
      tween.start();
    });
    return this.ThreeGroup;
  }

  _remove(): void {
    this.scene.remove(this.ThreeGroup);
    this.ThreeGroup.forEach((e: any) => {
      e.geometry.dispose();
      e.material.dispose();
    });
  }

  _animate(): void {
    TWEEN.update();
    requestAnimationFrame(() => {
      this._animate();
    });
  }
}
