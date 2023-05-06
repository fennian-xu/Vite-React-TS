// import './index.scss' 会导致样式污染
// 相当于scoped
import Styles from './index.module.scss'
const Comp1 = () => {
    return (
        <div className={Styles.box}>我是Comp1里面的内容</div>
    )
}
export default Comp1