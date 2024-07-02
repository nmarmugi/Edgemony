import styles from './App.module.css'
//import Card from './components/cardTest/CardTest'
import Card from './components/card/Card'
import posts from './assets/data/data.json' //CON USE STATE QUESTO VA COMMENTATO

function App() {

  return (
    <>
    <div className={styles.app}>
      {/* <Card /> */}
      {/* <Card /> */}
      {/* CON USE STATE QUESTO VA SCOMMENTATO */}
      <Card posts={posts}/>
      {/* CON USE STATE QUESTO VA COMMENTATO */}
    </div>
    </>
  )
}

export default App
