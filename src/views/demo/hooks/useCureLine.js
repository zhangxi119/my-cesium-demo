import * as THREE from 'three';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';

// 计算v1,v2 的中点
function getVCenter(v1, v2) {
  const v = v1.add(v2);
  return v.divideScalar(2);
}

// 计算V1，V2向量固定长度的点
function getLenVcetor(v1, v2, len) {
  const v1v2Len = v1.distanceTo(v2);
  return v1.lerp(v2, len / v1v2Len);
}

export const useCureLine = () => {
  let points = [];

  function createFlyLine(v0, v3) {
    // 夹角
    var angle = (v0.angleTo(v3) * 1.8) / Math.PI / 0.1; // 0 ~ Math.PI
    var aLen = angle * 0.4,
      hLen = angle * angle * 12;
    var p0 = new THREE.Vector3(0, 0, 0);
    // 法线向量
    var rayLine = new THREE.Ray(p0, getVCenter(v0.clone(), v3.clone()));
    // ray的at方法现在必须要两个参数才能执行，所以需要加入临时变量temp
    var temp = new THREE.Vector3();
    // 顶点坐标
    var vtop = rayLine.at(hLen / rayLine.at(1, temp).distanceTo(p0), temp);
    // 控制点坐标
    var v1 = getLenVcetor(v0.clone(), vtop, aLen);
    var v2 = getLenVcetor(v3.clone(), vtop, aLen);
    // 绘制三维三次贝赛尔曲线
    var curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3);
    var geometry = new LineGeometry();
    points = curve.getSpacedPoints(50);
    var positions = [];
    var colors = [];
    var color = new THREE.Color();
    /**
     * HSL中使用渐变
     * h — hue value between 0.0 and 1.0
     * s — 饱和度 between 0.0 and 1.0
     * l — 亮度 between 0.0 and 1.0
     */
    for (var j = 0; j < points.length; j++) {
      // color.setHSL( .31666+j*0.005,0.7, 0.7); //绿色
      color.setHSL(0.81666 + j, 0.88, 0.715 + j * 0.0025); //粉色
      colors.push(color.r, color.g, color.b);
      positions.push(points[j].x, points[j].y, points[j].z);
    }
    geometry.setPositions(positions);
    geometry.setColors(colors);
    var matLine = new LineMaterial({
      linewidth: 0.0008,
      vertexColors: true,
      dashed: false,
    });
    var lineMesh = new Line2(geometry, matLine);

    return lineMesh;
  }

  return {
    points,
    createFlyLine,
  };
};
