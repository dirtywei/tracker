import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      entryRoot: './src/main.ts',
      outDir: ['./dist/types/'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: './tsconfig.json'
    })
  ],
  build: {
    minify: 'esbuild', // boolean | 'terser' | 'esbuild'
    lib: {
      entry: './src/main.ts',
      name: 'tracker',
      fileName: 'tracker',
      formats: ['es', 'umd'] // 导出模块格式
    }
  },
  esbuild: {
    drop: ['console', 'debugger'] // 清除console debuggers
  },
  test: {
    globals: true, // enable jest-like global test APIs
    transformMode: {
      web: [/.[tj]sx$/] // 支持tsx组件，很关键
    }
  }
})
