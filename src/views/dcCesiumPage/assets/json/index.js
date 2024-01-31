const coordinate = {
  100000: () => import('./100000_full.json'),
  510000: () => import('./510000_full.json'),
  510100: () => import('./510100_full.json'),
};

const importCoordinate = (code) => {
  if (coordinate[code]) return coordinate[code];
  console.log(new Error('暂无区划地理数据!'));
  return;
};

export default importCoordinate;
