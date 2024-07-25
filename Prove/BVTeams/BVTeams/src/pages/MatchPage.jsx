import styles from './matchPage.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MatchPage() {

	const [score, setScore] = useState(() => {
		const savedPlayers = localStorage.getItem('score');
		return savedPlayers ? JSON.parse(savedPlayers) : {firstSquad: 0, secondSquad: 0};
	})

	const [openModal, setOpenModal] = useState(false)

	function handleAddPoint(e) {
		const teamId = e.target.id;
		setScore(prevState => {
			if (teamId === 'firstTeam') {
				return { ...prevState, firstSquad: prevState.firstSquad + 1 };
			} else {
				return { ...prevState, secondSquad: prevState.secondSquad + 1 };
			}
		});
	}

	useEffect(() => {
		if (score.firstSquad >= 21 || score.secondSquad >= 21) {
			if ((score.firstSquad === 21 && score.secondSquad < 20) || 
				(score.secondSquad === 21 && score.firstSquad < 20) ||
				(score.firstSquad > 21 && score.firstSquad - score.secondSquad >= 2) || 
				(score.secondSquad > 21 && score.secondSquad - score.firstSquad >= 2)) {
				setOpenModal(true);
			}
		}
		localStorage.setItem('score', JSON.stringify(score));
	}, [score])

	function getDisplayScore() {
		if (score.firstSquad >= 20 && score.secondSquad >= 20) {
			if (score.firstSquad === score.secondSquad + 1) {
				return { firstSquad: 'Van', secondSquad: score.secondSquad };
			} else if (score.secondSquad === score.firstSquad + 1) {
				return { firstSquad: score.firstSquad, secondSquad: 'Van' };
			}
		}
		return score;
	}

	const displayScore = getDisplayScore();

	function handleRestStorage() {
		localStorage.clear()
	}

	return (
		<div className={styles.containerMatch}>
			<NavLink className={styles.backToHome} to='/'>
				<img src="/img/beach-volleyball_7779940.png" alt="Icona Home" />
				<span>BACK TO HOME</span>
			</NavLink>
			<div className={styles.score}>
				<button onClick={handleAddPoint} id='firstTeam' className={styles.button}>+</button>
				<span>{displayScore.firstSquad} - {displayScore.secondSquad}</span>
				<button onClick={handleAddPoint} id='secondTeam' className={styles.button}>+</button>
			</div>
			{openModal &&
				<div className={styles.modal}>
					<div className={styles.contentModal}>
						<h2 className={styles.messageMatch}>MATCH ENDED</h2>
						<div>🏐🎉🏐🎉🏐</div>
						<NavLink onClick={handleRestStorage} className={styles.backHome} to='/'>BACK TO HOME</NavLink>
					</div>
				</div>
			}
		</div>
	)
}

export default MatchPage

