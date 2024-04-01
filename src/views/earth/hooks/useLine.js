import * as THREE from 'three';
import { ConicPolygonGeometry } from 'three-conic-polygon-geometry';
import { lon2xyz } from '../math';
import { config } from '../config';
import world from '@/assets/json/world.json';

export const useLine = () => {
  const { R } = config;
  const lineGroup = new THREE.Group();
  const areaGroup = new THREE.Group();
  let depthTemp = 0;
  // 创建线轮廓
  const createLine = (data, color = '#00ffff') => {
    const points = [];
    depthTemp = depthTemp + 0.0001;
    data.forEach((item) => {
      // const [x, y] = offsetXY(item);
      const [lng, lat] = item;
      const { x, y, z } = lon2xyz(R, lng, lat);
      points.push(new THREE.Vector3(x, y, z));
    });
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: color });

    const line = new THREE.Line(geometry, material);
    return line;
  };
  // 创建面轮廓
  const createArea = (data, color = '#000fff', depth = 0) => {
    // const shape = new THREE.Shape();
    // data.forEach((item, idx) => {
    //   // const [x, y] = offsetXY(item);
    //   const [lng, lat] = item;
    //   const { x, y, z } = lon2xyz(R, lng, lat);

    //   if (idx === 0) shape.moveTo(x, y, z);
    //   else shape.lineTo(x, y, z);
    // });

    // const extrudeSettings = {
    //   depth: depth,
    //   bevelEnabled: false,
    // };
    const materialSettings = {
      color: color,
      // emissive: 0x000000,
      // roughness: 0.45,
      // metalness: 0.8,
      // transparent: true,
      // side: THREE.DoubleSide,
    };
    // const geometry = new THREE.ShapeBufferGeometry(shape, extrudeSettings);
    const geometry = new ConicPolygonGeometry(data, R, R + 1);
    // const material = new THREE.MeshStandardMaterial(materialSettings);
    const material = new THREE.MeshBasicMaterial(materialSettings);
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
  };

  world.features.forEach((feature) => {
    const { coordinates, type } = feature.geometry;
    function fn(polygon) {
      const line = createLine(polygon);
      lineGroup.add(line);
    }
    coordinates.forEach((coordinate) => {
      // 画区域
      const mesh = createArea(coordinate);
      areaGroup.add(mesh);
      if (type === 'MultiPolygon') {
        // 画线
        coordinate.forEach((item) => fn(item));
      }
      if (type === 'Polygon') {
        fn(coordinate);
      }
    });
  });

  return {
    lineGroup,
    areaGroup,
  };
};
