import styles from './App.module.css'
import InitialPage from './componets/InitialPage'
import { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

function App() {
  const [isClick, setIsClick] = useState(false)
  const [radio, setRadio] = useState('')
  const [display, setDisplay] = useState(true)
  const [storage] = useState(() => {
		const savedPlayers = localStorage.getItem('players');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

  const [storageTwo, setStorageTwo] = useState(() => {
		const savedPlayers = localStorage.getItem('playersTargeted');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

  const [firstSquad, setFirstSquad] = useState(() => {
		const savedPlayers = localStorage.getItem('firstSquad');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

  const [secondSquad, setSecondSquad] = useState(() => {
		const savedPlayers = localStorage.getItem('secondSquad');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

  const [firstSquadRate, setFirstSquadRate] = useState(() => {
		const savedPlayers = localStorage.getItem('firstRate');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

  const [secondSquadRate, setSecondSquadRate] = useState(() => {
		const savedPlayers = localStorage.getItem('secondRate');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

  function handleChangeRadio(e) {
    setIsClick(false)
    setRadio(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, 3000)
    setFirstSquad(firstSquad)
    setSecondSquad(secondSquad)
  }, [])

  function handleGenerateSquads() {
    let firstSquad = [];
    let secondSquad = [];
    setIsClick(true)
    if (radio === 'random') {
      let totalFirstSquad = 0;
      let totalSecondSquad = 0;

      storage.forEach(element => {
        if(totalFirstSquad <= totalSecondSquad) {
          firstSquad.push(element)
          totalFirstSquad += Number(element.rate)
          setFirstSquad(firstSquad)
          setSecondSquad(secondSquad)
        } else {
          secondSquad.push(element)
          totalSecondSquad += Number(element.rate)
          setFirstSquad(firstSquad)
          setSecondSquad(secondSquad)
        }
      })
      const totalRateFirstSquad = firstSquad.reduce((acc, player) => acc + Number(player.rate), 0);
      const totalRateSecondSquad = secondSquad.reduce((acc, player) => acc + Number(player.rate), 0);

      setFirstSquadRate(totalRateFirstSquad);
      setSecondSquadRate(totalRateSecondSquad);
    }
    if (radio === 'targeted') {
      storageTwo.forEach(element => {
        if(element.team === 'firstTeam') {
          firstSquad.push(element)
          setFirstSquad(firstSquad)
          setSecondSquad(secondSquad)
        } else {
          secondSquad.push(element)
          setFirstSquad(firstSquad)
          setSecondSquad(secondSquad)
        }
      })
    }
  }

  useEffect(() => {
    if (radio === 'random') {
      localStorage.setItem('firstSquad', JSON.stringify(firstSquad))
      localStorage.setItem('secondSquad', JSON.stringify(secondSquad))
      localStorage.setItem('firstRate', JSON.stringify(firstSquadRate))
      localStorage.setItem('secondRate', JSON.stringify(secondSquadRate))
    }
    if (radio === 'targeted') {
      localStorage.setItem('firstSquad', JSON.stringify(firstSquad))
      localStorage.setItem('secondSquad', JSON.stringify(secondSquad))
    }
  }, [firstSquad, secondSquad]) 

  return (
    <div className={styles.mainPage}>
      <InitialPage display={display} />
      <img className={styles.mainPageLogo} src="/img/BVTeams-removebg-preview.png" alt="Logo" />
      <NavLink className={styles.navRules} to='rules'>i</NavLink>
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
      <div className={styles.radioContainer}>
        <div className={styles.radio}>
          <label htmlFor="random">RANDOM MATCH</label>
          <input onChange={handleChangeRadio} name='matchType' id='random' type="radio" value='random' />
        </div>
        <div className={styles.radio}>
          <label htmlFor="targeted">TARGETED MATCH</label>
          <input onChange={handleChangeRadio} name='matchType' id='targeted' type="radio" value='targeted' />
        </div>
      </div>
      <button onClick={handleGenerateSquads} className={styles.mainPageButton}>GENERETE TEAM</button>
      {firstSquad.length > 0 && secondSquad.length > 0 && radio === 'random' && isClick &&
      <div className={styles.match}>
        <div className={styles.containerSquad}>
        <div className={styles.squad}>
          <img className={styles.logoTeam} src="/img/FIRST_TEAM-removebg-preview.png" alt="Logo" />
          {
            firstSquad.map((element => <div className={styles.listItem} key={element.id}>
              <img className={styles.squadImg} src="/img/volleyball.png" alt="" />
              <span>{element.player}</span>
            </div>))
          }
          <span className={styles.totalRate}>Total Rate: {firstSquadRate}</span>
        </div>
        <div className={styles.squad}>
          <img className={styles.logoTeam} src="/img/SECOND_TEAM-removebg-preview.png" alt="Logo" />
          {
            secondSquad.map((element => <div className={styles.listItem} key={element.id}>
              <img className={styles.squadImg} src="/img/volleyball.png" alt="" />
              <span>{element.player}</span>
            </div>))
          }
          <span className={styles.totalRate}>Total Rate: {secondSquadRate}</span>
        </div>
        </div>
        <NavLink to='match' className={styles.buttonMatch}>🏐 MATCH 🏐</NavLink>
      </div>
      }
      {firstSquad.length > 0 && secondSquad.length > 0 && radio === 'targeted' && isClick &&
      <div className={styles.match}>
        <div className={styles.containerSquad}>
        <div className={styles.squad}>
          <img className={styles.logoTeam} src="/img/FIRST_TEAM-removebg-preview.png" alt="Logo" />
          {
            firstSquad.map((element => <div className={styles.listItem} key={element.id}>
              <img className={styles.squadImg} src="/img/volleyball.png" alt="" />
              <span>{element.player}</span>
            </div>))
          }
        </div>
        <div className={styles.squad}>
          <img className={styles.logoTeam} src="/img/SECOND_TEAM-removebg-preview.png" alt="Logo" />
          {
            secondSquad.map((element => <div className={styles.listItem} key={element.id}>
              <img className={styles.squadImg} src="/img/volleyball.png" alt="" />
              <span>{element.player}</span>
            </div>))
          }
        </div>
        </div>
        <NavLink to='match' className={styles.buttonMatch}>🏐 MATCH 🏐</NavLink>
      </div>
      }
    </div>
  )
}

export default App
