import styles from './App.module.css'
//import Card from './components/cardTest/CardTest'
import Card from './components/card/Card'
import posts from './assets/data/data.json'

function App() {

  return (
    <>
    <div className={styles.app}>
      {/* <Card /> */}
      <Card posts={posts}/>
    </div>
    </>
  )
}

export default App
