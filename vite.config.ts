import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Antd样式的按需引入
import styleImport,{ AntdResolve } from "vite-plugin-style-import"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      // 该配置用来做Antd样式的按需引入
      styleImport({
        resolves:[
            AntdResolve()
        ]
      })
  ],
  // 配置路径别名
  resolve: {
    alias: {
      "@":path.resolve(__dirname,'./src')
    }
  }
})
