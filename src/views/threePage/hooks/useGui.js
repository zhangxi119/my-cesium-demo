import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

export const useGui = () => {
  // 实例化一个gui对象
  const gui = new GUI();

  //创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
  const obj = {
    x: 40,
  };
  // gui增加交互界面，用来改变obj对应属性
  gui.add(obj, 'x', 0, 100).name('自定义属性');

  return {
    gui,
  };
};
