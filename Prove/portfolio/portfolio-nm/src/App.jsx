import styles from './App.module.css'
import Hamburger from './components/Hamburger/Hamburger'
import Navbar from './components/Navbar/Navbar'
import MainPage from './pages/MainPage/MainPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'

function App() {

  return (
    <div className={styles.containerMain}>
      <Hamburger />
      <Navbar />
      <div className={styles.maxWidth}>
        <div className={styles.containerBackground}>
          <img src="/img/5532919.jpg" alt="Background" />
        </div>
        <MainPage />
        <SkillsPage />
      </div>
    </div>
  )
}

export default App
