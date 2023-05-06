
import Comp1 from "./components/Comp1"
import Comp2 from "./components/Comp2"
import { Button } from 'antd';
function App() {
  return (
    <>
      <div className="app">app组件
          <Button type="primary">我得按钮</Button>
      <Comp1></Comp1>
      <Comp2></Comp2>
      </div>
    </>
  )
}

export default App
