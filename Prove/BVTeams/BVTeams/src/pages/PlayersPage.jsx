import { useState, useEffect } from 'react'
import styles from './playersPage.module.css'
import { NavLink } from 'react-router-dom'
import CardPlayer from '../componets/CardPlayer'

function PlayersPage() {

	const [storage, setStorage] = useState(() => {
		const savedPlayers = localStorage.getItem('players');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	});

	function handleClick(e) {
		const idCard = e.target.parentNode.id
		const deleteCard = storage.filter((element => element.id !== idCard))
		setStorage(deleteCard)
	}

	useEffect(() => {
		localStorage.setItem('players', JSON.stringify(storage))
	}, [storage])

	function handleDeleteAll() {
		setStorage([])
		localStorage.clear()
	}

	return (
		<div className={styles.containerPlayers}>
			<NavLink className={styles.backToHome} to='/'>
				<img src="/img/beach-volleyball_7779940.png" alt="Icona Home" />
				<span>BACK TO HOME</span>
			</NavLink>
			{storage.length ?
				<>
				<button className={styles.deleteAll} onClick={handleDeleteAll}>DELETE ALL</button>
				<h2 className={styles.titlePlayers}>{storage.length} PLAYERS</h2>
				<div className={styles.containerCards}>
					{
						storage.map((element => <CardPlayer key={element.id} 
															idCard={element.id}
															nameCard={element.player}
															rateCard={element.rate}
															onClick={handleClick}/>))
					}
				</div>
				</>
				: <h2 className={styles.titlePlayers}>NO REGISTERED PLAYERS</h2>
			}
		</div>
		)
}

export default PlayersPage