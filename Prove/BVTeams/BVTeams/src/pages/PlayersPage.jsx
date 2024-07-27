import { useState, useEffect } from 'react'
import styles from './playersPage.module.css'
import { NavLink } from 'react-router-dom'
import CardPlayer from '../componets/CardPlayer'

function PlayersPage() {

	const [radio, setRadio] = useState('')
	const [storage, setStorage] = useState(() => {
		const savedPlayers = localStorage.getItem('players');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	});

	const [storageTwo, setStorageTwo] = useState(() => {
		const savedPlayers = localStorage.getItem('playersTargeted');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	});

	function handleChangeRadio(e) {
		setRadio(e.target.value)
	}

	function handleClick(e) {
		const idCard = e.target.parentNode.id
		const deleteCard = storage.filter((element => element.id !== idCard))
		setStorage(deleteCard)
	}

	function handleClickTwo(e) {
		const idCard = e.target.parentNode.id
		const deleteCard = storageTwo.filter((element => element.id !== idCard))
		setStorageTwo(deleteCard)
	}

	useEffect(() => {
		localStorage.setItem('players', JSON.stringify(storage))
	}, [storage])

	useEffect(() => {
		localStorage.setItem('playersTargeted', JSON.stringify(storageTwo))
	}, [storageTwo])

	function handleDeleteAll() {
		setStorage([])
		setStorageTwo([])
		localStorage.clear()
	}

	function formatCamelCase(str) {
		const result = str.replace(/([A-Z])/g, ' $1');
		return result.charAt(0).toUpperCase() + result.slice(1);
	}

	return (
		<div className={styles.containerPlayers}>
			<NavLink className={styles.backToHome} to='/'>
				<img src="/img/beach-volleyball_7779940.png" alt="Icona Home" />
				<span>BACK TO HOME</span>
			</NavLink>
			{storage.length || storageTwo.length ?
				<>
				<button className={styles.deleteAll} onClick={handleDeleteAll}>DELETE ALL</button>
				<h2 className={styles.titlePlayers}>{radio === 'random' && storage.length}{radio === 'targeted' && storageTwo.length} PLAYERS</h2>
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
				<div className={styles.containerCards}>
					{radio === 'random' &&
						storage.map((element => <CardPlayer key={element.id} 
															idCard={element.id}
															nameCard={element.player}
															onClick={handleClick}>
																<span className={styles.rateCard}>Rate: {element.rate}</span>
															</CardPlayer>))
					}
					{radio === 'targeted' &&
						storageTwo.map((element => <CardPlayer key={element.id} 
															idCard={element.id}
															nameCard={element.player}
															onClick={handleClickTwo}>
																<span className={styles.rateCard}>Team: {formatCamelCase(element.team)}</span>
															</CardPlayer>))
					}
				</div>
				</>
				: <h2 className={styles.titlePlayers}>NO REGISTERED PLAYERS</h2>
			}
		</div>
		)
}

export default PlayersPage