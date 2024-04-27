import styles from './App.module.css'
import Title from './components/text/text'
import RightBlock from './components/rightblock/rightblock'
import LeftBlock from './components/leftblock/leftblock'
function App() {


    return (
        <div className={styles['container']}>
            <Title />
            <RightBlock />
            <LeftBlock />
        </div>
    )
}

export default App