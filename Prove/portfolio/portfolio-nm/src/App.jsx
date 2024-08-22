import styles from './App.module.css'
import Hamburger from './components/Hamburger/Hamburger'
import Navbar from './components/Navbar/Navbar'
import MainPage from './pages/MainPage/MainPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import { useContext, useState } from 'react'
import { StateContext, SetStateContext } from './components/Provider/Provider'
import Footer from './components/Footer/Footer'

function App() {

  const state = useContext(StateContext)
	const setState = useContext(SetStateContext)
  const [rocket, setRocket] = useState(true)

	function handleClick(key) {
		setState({
			home: key === 'home',
			projects: key === 'projects',
			skills: key === 'skills'
		})
	}

  function handleRocket() {
    setRocket(false)
    setTimeout(() => {
      setRocket(true)
    }, 700)
  }

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
        <ProjectsPage />
        <Footer />
      </div>
      <a onClick={() => handleClick('home')} href="#home">
        <img onClick={handleRocket} className={rocket ? styles.rocket : styles.rocketShake} src="/img/startup_1208168.png" alt="Rocket" />
        {!rocket && <img className={styles.fire} src="/img/fire_3487886.png" alt="Fire" />}
      </a>
    </div>
  )
}

export default App
