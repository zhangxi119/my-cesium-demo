import { cloneDeep } from 'lodash';
import worldJson from '../assets/json/world.json';
import worldMinJson from '../assets/json/world-min.json';
import chinaJson from '../assets/json/100000.json';
import bgImgWorld from '@/assets/dc-img/bg-point.png';
import bgImgMap from '@/assets/dc-img/bg-star.png';

export const useTheme = (DC, viewer, depth) => {
  // 获取Cesium原生库
  const { Cesium } = DC.__namespace;

  // 计算环绕地球的路径
  function computeEarthPath() {
    // 给定的起始经纬度和高度
    var startLongitude = Cesium.Math.toRadians(-75.0); // 起始经度（弧度）
    var startLatitude = Cesium.Math.toRadians(40.0); // 起始纬度（弧度）
    var height = 7500000; // 高度（单位：米）

    // 地球中心点的笛卡尔坐标
    var centerCartesian = new Cesium.Cartesian3(0, 0, 0); // 地球中心点的笛卡尔坐标

    // 获取地球半径
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var radius = ellipsoid.maximumRadius;

    // 将起始经纬度坐标转换为地心笛卡尔坐标
    var startCartographic = new Cesium.Cartographic(startLongitude, startLatitude, height);
    var startCartesian = ellipsoid.cartographicToCartesian(startCartographic);

    // 存储路径上的所有点
    var pathPoints = [];

    // 设置点位数
    var numPoints = 100; // 点位数

    // 计算路径上的每个点
    for (var i = 0; i < numPoints; i++) {
      // 计算当前点的角度
      var angle = Cesium.Math.TWO_PI * (i / numPoints); // 角度间隔

      // 使用四元数旋转起始点
      var quaternion = Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_Z, angle);
      var rotatedCartesian = Cesium.Matrix3.multiplyByVector(
        Cesium.Matrix3.fromQuaternion(quaternion),
        startCartesian,
        new Cesium.Cartesian3(),
      );

      // 将旋转后的笛卡尔坐标转换回经纬度加高度的坐标
      var rotatedCartographic = ellipsoid.cartesianToCartographic(rotatedCartesian);
      var latitudeDeg = Cesium.Math.toDegrees(rotatedCartographic.latitude);
      var longitudeDeg = Cesium.Math.toDegrees(rotatedCartographic.longitude);
      var heightMeters = rotatedCartographic.height;

      // 存储经纬度加高度的坐标
      pathPoints.push({ lat: latitudeDeg, lng: longitudeDeg, alt: heightMeters });
    }

    // 输出路径上的点位
    console.log(pathPoints);
    return pathPoints;
  }

  function initWordTheme() {
    const worldFullPromise = Cesium.GeoJsonDataSource.load(worldJson, {});
    const worldMinPromise = Cesium.GeoJsonDataSource.load(worldMinJson, {});
    let now = DC.JulianDate.now();
    const layer_theme = new DC.DynamicLayer('layer_word_theme');
    // 世界区域线
    worldFullPromise
      .then((dataSource) => {
        const entities = dataSource.entities.values;
        entities.forEach((entity) => {
          if (entity.polygon) {
            let positions = DC.Transform.transformCartesianArrayToWGS84Array(
              // http://cesium.xin/cesium/cn/Documentation1.62/Property.html
              entity.polygon.hierarchy.getValue(now).positions,
            );
            positions.forEach((item) => {
              item.alt = depth / 3;
            });
            // 发光线
            let polylineLight = new DC.Polyline(positions);
            polylineLight.setStyle({
              width: 0.5,
              material: new DC.PolylineTrailMaterialProperty({
                speed: 1,
                color: DC.Color.fromCssColorString('#dedcbe'),
              }),
            });
            layer_theme.addOverlays([polylineLight]);
          }
        });
        viewer.addLayer(layer_theme);
      })
      .catch((e) => {
        console.log(e, '--------error');
      });
    // 世界区域面
    worldMinPromise
      .then((dataSource) => {
        const entities = dataSource.entities.values;
        entities.forEach((entity) => {
          if (entity.polygon) {
            let positions = DC.Transform.transformCartesianArrayToWGS84Array(
              entity.polygon.hierarchy.getValue(now).positions,
            );
            positions.map((item) => {
              item.alt = depth;
            });
            // 侧面
            let polygon = DC.Polygon.fromEntity(entity);
            polygon.setStyle({
              material: DC.Color.fromCssColorString('#fdfba6'),
              extrudedHeight: depth / 3,
              closeTop: false,
              closeBottom: false,
            });
            // 面
            let polygonTop = DC.Polygon.fromEntity(entity);
            polygonTop.setStyle({
              material: DC.Color.fromCssColorString('#4b4b4d'),
              extrudedHeight: depth / 3,
              height: depth / 3 - 1,
              perPositionHeight: false,
            });
            layer_theme.addOverlays([polygonTop, polygon]);
          }
        });
        viewer.addLayer(layer_theme);
      })
      .catch((e) => {
        console.log(e, '--------error');
      });
  }

  function initChinaTheme() {
    const chainDataPromise = Cesium.GeoJsonDataSource.load(chinaJson, {});
    let now = DC.JulianDate.now();
    const layer_theme = new DC.DynamicLayer('layer_china_theme');
    chainDataPromise
      .then((dataSource) => {
        const entities = dataSource.entities.values;
        entities.forEach((entity) => {
          if (entity.polygon) {
            let positions = DC.Transform.transformCartesianArrayToWGS84Array(
              // http://cesium.xin/cesium/cn/Documentation1.62/Property.html
              entity.polygon.hierarchy.getValue(now).positions,
            );
            positions.map((item) => {
              item.alt = depth;
            });
            // 发光线
            let polylineLight = new DC.Polyline(positions);
            polylineLight.setStyle({
              width: 2.5,
              material: new DC.PolylineLightingMaterialProperty({
                color: DC.Color.YELLOW,
              }),
            });
            // 边面
            let polygon = DC.Polygon.fromEntity(entity);
            polygon.setStyle({
              // material: new DC.PolylineGlowMaterialProperty({
              //   color: DC.Color.fromCssColorString('rgba(254,255,206, 0.1)'),
              // }),
              extrudedHeight: depth,
              material: DC.Color.fromCssColorString('rgba(254,255,0, 0.1)'),
              closeTop: false,
              closeBottom: false,
            });
            // 下面
            let polygonBottom = DC.Polygon.fromEntity(entity);
            polygonBottom.setStyle({
              extrudedHeight: depth / 3 + 100,
              material: new DC.ImageMaterialProperty({
                image: bgImgWorld,
                repeat: { x: 4, y: 4 },
                transparent: true,
              }),
            });
            layer_theme.addOverlays([polylineLight, polygon, polygonBottom]);
          }
        });
        viewer.addLayer(layer_theme);
        // viewer.flyToPosition(levelInfo[levelCode]);
      })
      .catch((e) => {
        console.log(e, '--------error');
      });
  }

  function initGlobeTheme() {
    const layer_globe_theme = new DC.VectorLayer('layer_globe_theme');
    // 获取地球球心坐标
    const ellipsoidCenter = viewer.scene.globe.ellipsoid.cartographicToCartesian(new Cesium.Cartographic());
    const { x } = ellipsoidCenter;
    let position = new DC.Position(0, 0, -x);
    let ellipsoid = new DC.Ellipsoid(position, { x: 6000000.0, y: 6000000.0, z: 6000000.0 }).setStyle({
      heightReference: 0,
      // material: DC.Color.fromCssColorString('rgba(255, 255, 255, 0)'),
      material: new DC.ImageMaterialProperty({
        image: bgImgWorld,
        repeat: { x: 10, y: 10 },
        transparent: true,
      }),
      outline: false,
      outlineColor: DC.Color.fromCssColorString('rgba(255, 255, 255, 0.1)'),
      stackPartitions: 32,
      slicePartitions: 32,
    });
    let ellipsoidOut = new DC.Ellipsoid(position, { x: 7500000.0, y: 7500000.0, z: 7500000.0 }).setStyle({
      heightReference: 0,
      material: DC.Color.fromCssColorString('rgba(255, 255, 255, 0)'),
      // material: new DC.ImageMaterialProperty({
      //   image: bgImgMap,
      //   repeat: { x: 2, y: 2 },
      //   transparent: true,
      // }),
      outline: false,
      outlineColor: DC.Color.fromCssColorString('rgba(255, 255, 255, 0.1)'),
      stackPartitions: 32,
      slicePartitions: 32,
    });
    layer_globe_theme.addOverlays([ellipsoid, ellipsoidOut]);
    viewer.addLayer(layer_globe_theme);
  }

  function initSkyBox() {
    const i = 3;
    viewer.setOptions({
      skyBox: new DC.SkyBox({
        sources: {
          positiveX: `https://dc.dvgis.cn/examples/assets/images/sky-box/${i}/right.png`,
          negativeX: `https://dc.dvgis.cn/examples/assets/images/sky-box/${i}/left.png`,
          positiveY: `https://dc.dvgis.cn/examples/assets/images/sky-box/${i}/down.png`,
          negativeY: `https://dc.dvgis.cn/examples/assets/images/sky-box/${i}/up.png`,
          positiveZ: `https://dc.dvgis.cn/examples/assets/images/sky-box/${i}/back.png`,
          negativeZ: `https://dc.dvgis.cn/examples/assets/images/sky-box/${i}/front.png`,
        },
      }),
    });
  }

  function initFlyLine() {
    // 获取地球球心坐标
    // const ellipsoidCenter = viewer.scene.globe.ellipsoid.cartographicToCartesian(new Cesium.Cartographic());
    // const { x } = ellipsoidCenter;
    // let position = new DC.Position(0, 0, x);
    // const positions = computeEarthPath();
    // const positionsStr = positions.map((e) => `${e.lat},${e.lng},${e.height}`).join(';');
    let polyline = new DC.Polyline(computeEarthPath());
    polyline.setStyle({
      width: 20,
      material: new DC.PolylineLightingTrailMaterialProperty({
        color: DC.Color.YELLOW,
        speed: 5.0,
      }),
      clampToGround: false,
    });

    const layer_line_theme = new DC.VectorLayer('layer_line_theme');
    viewer.addLayer(layer_line_theme);
    layer_line_theme.addOverlay(polyline);
  }

  function initTheme() {
    initSkyBox();
    initWordTheme();
    initChinaTheme();
    initFlyLine();
    computeEarthPath();
    // initGlobeTheme();
  }

  return {
    initWordTheme,
    initChinaTheme,
    initGlobeTheme,
    initTheme,
  };
};
