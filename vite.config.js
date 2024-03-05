import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import DC from '@dvgis/vite-plugin-yun-dc';
import cesium from 'vite-plugin-cesium'; //1.引入cesium

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    cesium(),
    DC(),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
      packages: resolve(__dirname, './src/packages'),
    },
    // 省略文件后缀
    extensions: ['', '.js', '.json', '.vue', '.scss', '.css', '.ts'],
  },
});
