import * as CesiumPackage from 'cesium';

class CesiumUtils {
  constructor() {
    this.Cesium = CesiumPackage;
    this.viewer = null;
    this.scene = null;
  }
  init(id) {
    let Cesium = this.Cesium;

    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNWQyNjQ0Yy1hOTJiLTQ4NWUtYWU2MC0xZjZmYzY5NzBkYmUiLCJpZCI6MTg2NzIxLCJpYXQiOjE3MDM3Mjg3ODh9.M_otewWAbWM4S0F6UDsGkQLPG9tfbqE_vePOG0dbr3E';

    this.viewer = new Cesium.Viewer(id, {
      infoBox: false,
      selectionIndicator: false,
    });
    // 地图
    // this.imageryLayer = new Cesium.ImageryLayer(
    //   new Cesium.SuperMapImageryProvider({
    //     url: this.MapURL,
    //     packingRequest: 1,
    //   }),
    // );
    // // this.imageryLayer._indexedDBSetting.isOpen = true
    // this.viewer.imageryLayers.add(this.imageryLayer);

    this.viewer.scene.globe.depthTestAgainstTerrain = true;

    var scene = this.viewer.scene;
    this.scene = scene;
    // 太阳光
    scene.sun.show = true;
    return this;
  }
  setStyle() {
    let Cesium = this.Cesium;
    this.scene.sun.show = false;
    this.viewer.scene.globe.depthTestAgainstTerrain = true;
    var ambientOcclusion = this.viewer.scene.postProcessStages.ambientOcclusion;
    ambientOcclusion.enabled = true;
    ambientOcclusion.uniforms.ambientOcclusionOnly = false;
    ambientOcclusion.uniforms.intensity = 3;
    ambientOcclusion.uniforms.bias = 0.1;
    ambientOcclusion.uniforms.lengthCap = 0.03;
    ambientOcclusion.uniforms.stepSize = 1;
    ambientOcclusion.uniforms.blurStepSize = 0.86;
    // 大气
    this.scene.skyAtmosphere.show = false;
    this.scene.skyAtmosphere.hueShift = -0.78;
    this.scene.skyAtmosphere.saturationShift = -0.94;
    this.scene.skyAtmosphere.brightnessShift = -0.44;
    this.scene.fog.enabled = false;
    this.scene.globe.enableLighting = true;
    // 开启泛光
    // this.scene.bloomEffect.show = false;
    // this.scene.bloomEffect.threshold = 0.01;
    // this.scene.bloomEffect.bloomIntensity = 0.05;

    this.viewer.scene.hdrEnabled = true;
    // 添加环境光源
    this.scene.lightSource.ambientLightColor = Cesium.Color.fromCssColorString('rgba(11,55,108,1)');

    // 新增直射光1--西南侧光
    var position = Cesium.Cartesian3.fromDegrees(103.70215338757275, 29.54148992675349, 71);
    var targetPosition1 = Cesium.Cartesian3.fromDegrees(103.77232798687302, 29.632022732715672, 1);
    var dirLightOptions = {
      targetPosition: targetPosition1,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.2,
    };
    let directionalLight1 = new Cesium.DirectionalLight(position, dirLightOptions);
    this.scene.addLightSource(directionalLight1);
    // 新增直射光1--南侧光
    var position2 = Cesium.Cartesian3.fromDegrees(103.73095167211254, 29.51372257545027, 91);
    var targetPosition2 = Cesium.Cartesian3.fromDegrees(103.75454215930779, 29.671353567961955, 1);
    var dirLightOptions2 = {
      targetPosition: targetPosition2,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.2,
    };
    let directionalLight2 = new Cesium.DirectionalLight(position2, dirLightOptions2);
    this.scene.addLightSource(directionalLight2);
    // 新增直射光1--东北侧光
    var position3 = Cesium.Cartesian3.fromDegrees(103.77232798687302, 29.632022732715672, 1);
    var targetPosition3 = Cesium.Cartesian3.fromDegrees(103.70215338757275, 29.54148992675349, 91);
    var dirLightOptions3 = {
      targetPosition: targetPosition3,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.2,
    };
    let directionalLight3 = new Cesium.DirectionalLight(position3, dirLightOptions3);
    this.scene.addLightSource(directionalLight3);
    // 新增直射光1--顶光
    var position4 = Cesium.Cartesian3.fromDegrees(106.492, 29.593, 100);
    var targetPosition4 = Cesium.Cartesian3.fromDegrees(106.492, 29.593, 10);
    var dirLightOptions4 = {
      targetPosition: targetPosition4,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.15,
    };
    let directionalLight4 = new Cesium.DirectionalLight(position4, dirLightOptions4);
    this.scene.addLightSource(directionalLight4);

    // let layer01 = this.scene.layers.find('HighDataBuilings@DataXY');
    // let layer02 = this.scene.layers.find('MidHighBuildings@DataXY');
    // let layer03 = this.scene.layers.find('MidBuildings@DataXY');
    // let layer04 = this.scene.layers.find('MidLowBuildings@DataXY');
    // let layer05 = this.scene.layers.find('LowBuildings@DataXY');
    // this.setLayers(layer01, '01');
    // this.setLayers(layer02, '02');
    // this.setLayers(layer03, '03');
    // this.setLayers(layer04, '04');
    // this.setLayers(layer05, '05');
    // for (let i in pointsPos) {
    //   pointsPos[i].points.forEach((item) => {
    //     this.scene.addLightSource(
    //       new Cesium.PointLight(Cesium.Cartesian3.fromDegrees(item.lon, item.lat, item.h), {
    //         color: Cesium.Color.fromCssColorString('#FFFFFF'),
    //         cutoffDistance: pointsPos[i].range,
    //         decay: 1,
    //         intensity: 0.8,
    //       }),
    //     );
    //   });
    // }
  }
}

export default CesiumUtils;
