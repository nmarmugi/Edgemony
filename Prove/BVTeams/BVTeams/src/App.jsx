import styles from './App.module.css'
import InitialPage from './componets/InitialPage'
import { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

function App() {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, 3000)
  }, [])

  return (
    <div className={styles.mainPage}>
      <InitialPage display={display} />
      <img className={styles.mainPageLogo} src="/img/BVTeams-removebg-preview.png" alt="Logo" />
      <div className={styles.containerLinks}>
        <NavLink className={styles.navLink} to='form'>
          <div className={styles.link}>
            <img className={styles.imgNav} src="/img/avatar_14391289.png" alt="Icona" />
            <span>ADD PLAYER</span>
          </div>
        </NavLink>
        <NavLink className={styles.navLink} to='players'>
        <div className={styles.link}>
            <img className={styles.imgNav} src="/img/volleyball-player_5029624.png" alt="Icona" />
            <span>SEE PLAYERS</span>
          </div>
        </NavLink>
      </div>
      <button className={styles.mainPageButton}>GENERETE TEAM</button>
    </div>
  )
}

export default App
