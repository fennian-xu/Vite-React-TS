import Home from "@/views/Home";
import About from "@/views/About";
import User from "@/views/User";
// 引入重定向组件
import { Navigate } from 'react-router-dom'
const routes = [
    {
        path:'/',
        element:<Navigate to="/home"></Navigate>
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'/about',
        element:<About></About>
    },
    {
        path:'/user',
        element:<User></User>
    }
]
export default routes