import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// 配置elementPlus按需导入
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // 配置elementPlus按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 实际的路径转换 @ -> src
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
