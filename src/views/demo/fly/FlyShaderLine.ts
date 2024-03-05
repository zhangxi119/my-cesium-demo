import * as THREE from 'three';
import FlyBase from './FlyBase';
import TWEEN from '@tweenjs/tween.js';

interface flyLineBegin2End {
  begin: number[];
  end: number[];
  height: number;
}

interface optionsInterface {
  routeColor: string;
  flyColor: string;
  cycle: number;
}

export default class FlyLine extends FlyBase {
  scene: THREE.Scene;
  data: Array<flyLineBegin2End>;
  cycle: number;
  routeColor: string;
  flyColor: string;
  ThreeGroup: THREE.Group;

  constructor(scene: THREE.Scene, data: Array<flyLineBegin2End>, options?: optionsInterface) {
    super();
    this.scene = scene;
    this.data = data;
    this.ThreeGroup = new THREE.Group();
    this.cycle = options?.cycle || 10000;
    this.routeColor = options?.routeColor || '#00FFFF';
    this.flyColor = options?.flyColor || '#FFFF00';
    this.scene.add(this._draw());
    this._animate();
  }

  _animate() {
    TWEEN.update();
    requestAnimationFrame(() => {
      this._animate();
    });
  }

  _draw() {
    this.data.map((data) => {
      const startPoint = data.begin; // 起始点
      const endPoint = data.end; // 终点
      const curveH = data.height; // 飞线最大高
      // 创建管道
      const pointInLine = [
        new THREE.Vector3(startPoint[0], startPoint[1], 0),
        new THREE.Vector3((startPoint[0] + endPoint[0]) / 2, (startPoint[1] + endPoint[1]) / 2, curveH),
        new THREE.Vector3(endPoint[0], endPoint[1], 0),
      ];

      const lineCurve = new THREE.CatmullRomCurve3(pointInLine);

      const points = lineCurve.getPoints(1500);
      console.log(points, '------poisnts');

      const indexList: number[] = [];
      // const positionList: number[] = [];
      points.forEach((item, index) => {
        indexList.push(index);
      });

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      geometry.setAttribute('aIndex', new THREE.Float32BufferAttribute(indexList, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uColor: {
            value: new THREE.Color(this.flyColor),
          },
          uRouteColor: {
            value: new THREE.Color(this.routeColor),
          },
          uTime: {
            value: 0,
          },
          uLength: {
            value: points.length,
          },
        },
        vertexShader: `
        attribute float aIndex;

        uniform float uTime;
        uniform vec3 uColor;

        varying float vSize;

        void main(){
            vec4 viewPosition = viewMatrix * modelMatrix *vec4(position,1);
            gl_Position = projectionMatrix * viewPosition;

            if(aIndex < uTime + 100.0 && aIndex > uTime - 100.0){
              vSize = (aIndex + 100.0 - uTime) / 60.0;
              gl_PointSize =vSize;
            } else {
              gl_PointSize = 2.0;
            }
        }
      `,
        fragmentShader: `
        varying float vSize;
        uniform vec3 uColor;
        uniform vec3 uRouteColor;
        void main(){

            if(vSize<=0.0){
                gl_FragColor = vec4(uRouteColor,0.1);
            }else{
                gl_FragColor = vec4(uColor,1.0);
            }
            
        }
      `,
        transparent: true,
      });

      this.ThreeGroup.add(new THREE.Points(geometry, material));

      const tween = new TWEEN.Tween({ index: 0 })
        .to({ index: 1000 }, this.cycle)
        .onUpdate(function (t) {
          const id = Math.ceil(t.index);
          material.uniforms.uTime.value = id;
        })
        .repeat(Infinity);
      tween.start();
    });
    return this.ThreeGroup;
  }

  _remove() {
    this.scene.remove(this.ThreeGroup);
    this.ThreeGroup.children.map((l: any) => {
      l.geometry.dispose();
      l.material.dispose();
    });
  }
}
