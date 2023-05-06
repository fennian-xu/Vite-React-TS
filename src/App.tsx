import { useRoutes,Link } from "react-router-dom"
import router from "@/router";
function App() {
    const routerView = useRoutes(router)
  return (

      <div className="App">
          <Link to="/home">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/user">User</Link>
      {/* 占位符 */}
          {routerView}
      </div>

  )
}

export default App
