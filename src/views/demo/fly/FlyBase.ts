import * as THREE from 'three';

interface flyLineBegin2End {
  begin: number[];
  end: number[];
  height: number;
}

// 定义抽象飞线基类
export default abstract class FlyBase {
  // 必须存在的属性
  abstract scene: THREE.Scene;
  abstract data: Array<flyLineBegin2End>;
  abstract ThreeGroup: THREE.Group;

  // 必须存在的方法
  abstract _draw(): THREE.Group; // 添加场景
  abstract _remove(): void; // 移除实体
  abstract _animate(): void; // 开启动画
}
