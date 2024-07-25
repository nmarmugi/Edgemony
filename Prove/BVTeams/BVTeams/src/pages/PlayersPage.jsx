import { useState, useEffect } from 'react'
import styles from './playersPage.module.css'
import { NavLink } from 'react-router-dom'
import CardPlayer from '../componets/CardPlayer'

function PlayersPage() {

	const [storage, setStorage] = useState([])

	useEffect(() => {
		const getStorage = JSON.parse(localStorage.getItem('players'))
		setStorage(getStorage)
	}, [])

	return (
		<div className={styles.containerPlayers}>
			<NavLink className={styles.backToHome} to='/'>
				<img src="/img/beach-volleyball_7779940.png" alt="Icona Home" />
				<span>BACK TO HOME</span>
			</NavLink>
			{storage ?
				<>
				<h2 className={styles.titlePlayers}>{storage.length} PLAYERS</h2>
				<div className={styles.containerCards}>
					{
						storage.map((element => <CardPlayer key={element.id} 
															idCard={element.id}
															nameCard={element.player}
															rateCard={element.rate}/>))
					}
				</div>
				</>
				: <h2 className={styles.titlePlayers}>NO REGISTERED PLAYERS</h2>
			}
		</div>
		)
}

export default PlayersPage