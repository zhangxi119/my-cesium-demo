export function lon2xyz(R, longitude, latitude) {
  var lon = (longitude * Math.PI) / 180; //转弧度值
  var lat = (latitude * Math.PI) / 180; //转弧度值
  lon = -lon; //three.js坐标系z坐标轴对应经度-90度，而不是90度
  //经纬度坐标转球面坐标计算公式
  var x = R * Math.cos(lat) * Math.cos(lon);
  var y = R * Math.sin(lat);
  var z = R * Math.cos(lat) * Math.sin(lon);

  return {
    x,
    y,
    z,
  };
}
