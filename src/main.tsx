import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式一般写在最前面
import "reset-css"
// 全局样式
import "@/assets/styles/global.scss"
// ui样式
// 需要用到按需引入  所以用到插件 vite-plugin-style-import
// import 'antd/dist/reset.css';
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
