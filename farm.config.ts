import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  vitePlugins: [vue()],
  compilation: {
    input: {
      index: "./src/index.ts",
    },
    output: {
      targetEnv: 'browser',
      format: 'esm',
    },
    minify: false,
    presetEnv: false,

  },
});
