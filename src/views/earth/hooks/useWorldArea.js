import * as THREE from 'three';
import { ConicPolygonGeometry } from 'three-conic-polygon-geometry';
import { lon2xyz } from '../math';
import { config } from '../config';
// import world from '@/assets/json/world.json';

export const useWorldArea = () => {
  const { R } = config;
  const lineGroup = new THREE.Group();
  const areaGroup = new THREE.Group();
  // 创建线轮廓
  const createLine = (data, color = '#00ffff') => {
    const points = [];
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
  const createArea = (data, color = '#000fff') => {
    const materialSettings = {
      color: color,
    };
    const geometry = new ConicPolygonGeometry(data, R - 1, R - 0.1, true, true, true, 1);
    geometry.rotateY(Math.PI / 2);
    const material = new THREE.MeshBasicMaterial(materialSettings);
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
  };

  // 创建平面轮廓
  const create2Area = (data, color = '#000fff', depth = 0) => {
    const shape = new THREE.Shape();
    data.forEach((item, idx) => {
      // const [x, y] = offsetXY(item);
      const [lng, lat] = item;
      // const { x, y, z } = lon2xyz(R, lng, lat);

      if (idx === 0) shape.moveTo(lng, lat);
      else shape.lineTo(lng, lat);
    });

    const extrudeSettings = {
      depth: depth,
      bevelEnabled: false,
    };
    const materialSettings = {
      color: color,
      emissive: 0x000000,
      roughness: 0.45,
      metalness: 0.8,
      transparent: true,
      side: THREE.DoubleSide,
    };
    const geometry = new THREE.ShapeBufferGeometry(shape, extrudeSettings);
    // const geometry = new ConicPolygonGeometry(data, R, R + 1);
    // const material = new THREE.MeshStandardMaterial(materialSettings);
    const material = new THREE.MeshBasicMaterial(materialSettings);
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
  };
  const loader = new THREE.FileLoader();
  loader.load('https://oss-public.yunlizhi.cn/frontend/yun-design/geojson/world.json', (data) => {
    const resources = JSON.parse(data);
    resources.features.forEach((feature) => {
      const { coordinates, type } = feature.geometry;
      const polygons = type === 'Polygon' ? [coordinates] : coordinates;
      function fn(polygon) {
        const line = createLine(polygon);
        lineGroup.add(line);
        // const area = create2Area(polygon);
        // areaGroup.add(area);
      }
      polygons.forEach((coordinate) => {
        // 画区域
        const mesh = createArea(coordinate);
        areaGroup.add(mesh);
        coordinate.forEach((item) => fn(item));
      });
    });
  });

  return {
    lineGroup,
    areaGroup,
  };
};