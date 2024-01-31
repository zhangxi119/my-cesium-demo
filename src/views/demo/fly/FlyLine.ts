import * as THREE from 'three';
import FlyBase from './FlyBase';
import TWEEN from '@tweenjs/tween.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';

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

export default class FlyLine extends FlyBase {
  data: flyLineBegin2End[];
  scene: THREE.Scene;
  ThreeGroup: THREE.Group;
  routeColor: string;
  flyColor: string;
  cycle: number;

  constructor(scene: THREE.Scene, data: Array<flyLineBegin2End>, options?: optionInterface) {
    super();
    this.data = data;
    this.scene = scene;
    this.ThreeGroup = new THREE.Group();

    this.routeColor = options?.routeColor || '#00FFFF';
    this.flyColor = options?.flyColor || '#FFFF00';
    this.cycle = options?.cycle || 2000;
    this.scene.add(this._draw());
    this._animate();
  }
  _draw() {
    this.data.forEach((item) => {
      const points = this._getPoints(item);
      console.log(points, '-----points');
      const lineMesh = this._createFixedLine(points);
      const moveMesh = this._createMoveLine(points, 10);
      this.ThreeGroup.add(lineMesh, moveMesh);
      const tween = new TWEEN.Tween({ index: 0 })
        .to({ index: 100 }, this.cycle)
        .onUpdate(function (t) {
          const movedLineGeom = moveMesh.geometry;
          const id = Math.ceil(t.index);
          const pointsList = points.slice(id, id + 10);

          const tempPoints = pointsList
            .map((item: any) => {
              const { x, y, z } = item;
              return [x, y, z];
            })
            .flat();
          movedLineGeom && movedLineGeom.setPositions(tempPoints);
          movedLineGeom.attributes.position.needsUpdate = true;
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

  // 根据起始点绘制曲线后获取点位
  _getPoints(data: flyLineBegin2End) {
    const { begin: startPoint, end: endPoint, height: curveH } = data;
    // 三点创建弧线几何体
    const pointLine = [
      new THREE.Vector3(startPoint[0], startPoint[1], 0),
      new THREE.Vector3((startPoint[0] + endPoint[0]) / 2, (startPoint[1] + endPoint[1]) / 2, curveH),
      new THREE.Vector3(endPoint[0], endPoint[1], 0),
    ];
    const curve = new THREE.CatmullRomCurve3(pointLine);
    const points = curve.getSpacedPoints(100);
    return points;
  }

  // 创建轨迹线
  _createFixedLine(points: THREE.Vector3[]) {
    const tempPoints = points
      .map((item: any) => {
        const { x, y, z } = item;
        return [x, y, z];
      })
      .flat();
    return new Line2(
      new LineGeometry().setPositions(tempPoints),
      new LineMaterial({
        color: this.routeColor,
        linewidth: 0.001,
        vertexColors: false,
        dashed: false,
      }),
    );
  }

  // 截取轨迹线作为飞线
  _createMoveLine(points: THREE.Vector3[], length: number) {
    const moveLinePoints = points.slice(0, length);
    const moveGeometry = new LineGeometry();
    const tempPoints = moveLinePoints
      .map((item: any) => {
        const { x, y, z } = item;
        return [x, y, z];
      })
      .flat();
    moveGeometry.setPositions(tempPoints);

    const color1 = new THREE.Color(this.routeColor);
    const color2 = new THREE.Color(this.flyColor);

    // 获取飞线段渐变色
    const colorArr = [];
    moveLinePoints.forEach((e, i) => {
      const color = color1.lerp(color2, i / 5);
      colorArr.push(color.r, color.g, color.b);
    });
    moveGeometry.setColors(colorArr);
    // moveGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colorArr), 3));
    moveGeometry.attributes.position.needsUpdate = true;

    const material = new LineMaterial({
      vertexColors: true, //使用顶点本身颜色
      linewidth: 0.0012,
      dashed: false,
    });
    return new Line2(moveGeometry, material);
  }
}
