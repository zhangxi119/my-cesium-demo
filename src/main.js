import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import '@dvgis/yun-dc-sdk/dist/dc.min.css';
// import * as THREE from 'three';

// console.log(THREE, '--------HTREE')

createApp(App).use(router).mount('#app');
