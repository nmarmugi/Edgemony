import styles from './matchPage.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

function MatchPage() {

	const [score, setScore] = useState(() => {
		const savedPlayers = localStorage.getItem('score');
		return savedPlayers ? JSON.parse(savedPlayers) : {firstSquad: 0, secondSquad: 0};
	})

	const [firstSquad] = useState(() => {
		const savedPlayers = localStorage.getItem('firstSquad');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

	const [secondSquad] = useState(() => {
		const savedPlayers = localStorage.getItem('secondSquad');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	})

	const [openModal, setOpenModal] = useState(false)

	const [winner, setWinner] = useState(false)

	function handleAddPoint(e) {
		const teamId = e.target.id;
		setScore(prevState => {
			if (teamId === 'firstTeam') {
				setWinner(false)
				return { ...prevState, firstSquad: prevState.firstSquad + 1 };
			} else {
				setWinner(true)
				return { ...prevState, secondSquad: prevState.secondSquad + 1 };
			}
		});
	}

	function handleMinusPoint(e) {
		const teamId = e.target.id;
		setScore(prevState => {
			if (teamId === 'firstTeamMinus' && prevState.firstSquad > 0) {
				return { ...prevState, firstSquad: prevState.firstSquad - 1 };
			} else if (teamId === 'secondTeamMinus' && prevState.secondSquad > 0) {
				return { ...prevState, secondSquad: prevState.secondSquad - 1 };
			}
			return prevState;
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
			<div className={styles.containerSquad}>
				<div className={styles.squad}>
					<img className={styles.logoTeam} src="/img/FIRST_TEAM-removebg-preview.png" alt="Logo" />
					{firstSquad.map(element => (
						<div className={styles.listItem} key={element.id}>
							<img className={styles.squadImg} src="/img/volleyball.png" alt="" />
							<span>{element.player}</span>
						</div>
					))}
				</div>
				<div className={styles.squad}>
					<img className={styles.logoTeam} src="/img/SECOND_TEAM-removebg-preview.png" alt="Logo" />
					{secondSquad.map(element => (
						<div className={styles.listItem} key={element.id}>
							<img className={styles.squadImg} src="/img/volleyball.png" alt="" />
							<span>{element.player}</span>
						</div>
					))}
				</div>
			</div>
				<div className={styles.score}>
					<div className={styles.containerPlusMinus}>
						<button onClick={handleAddPoint} id='firstTeam' className={styles.button}>+</button>
						<button onClick={handleMinusPoint} id='firstTeamMinus' className={classNames(styles.button, styles.buttonMinus)}>-</button>
					</div>
					<span>{displayScore.firstSquad} - {displayScore.secondSquad}</span>
					<div className={styles.containerPlusMinus}>
						<button onClick={handleAddPoint} id='secondTeam' className={styles.button}>+</button>
						<button onClick={handleMinusPoint} id='secondTeamMinus' className={classNames(styles.button, styles.buttonMinus)}>-</button>
					</div>
				</div>
			{openModal &&
				<div className={styles.modal}>
					<div className={styles.contentModal}>
						<h2 className={styles.messageMatch}>MATCH ENDED</h2>
						<h2 className={styles.messageMatchResult}><span>FINAL RESULT</span>{score.firstSquad} - {score.secondSquad}</h2>
						<div className={styles.squad}>
							<span className={styles.spanWin}>WIN</span>
							<img className={styles.logoTeam} src={winner ? '/img/SECOND_TEAM-removebg-preview.png' : '/img/FIRST_TEAM-removebg-preview.png'} alt="Logo" />
							{winner ? secondSquad.map((element => <div className={styles.listItem} key={element.id}>
									<img className={styles.squadImg} src="/img/volleyball.png" alt="" />
									<span>{element.player}</span>
								</div>)) :
								firstSquad.map((element => <div className={styles.listItem} key={element.id}>
									<img className={styles.squadImg} src="/img/volleyball.png" alt="" />
									<span>{element.player}</span>
								</div>))
							}</div>
						<NavLink onClick={handleRestStorage} className={styles.backHome} to='/'>BACK TO HOME</NavLink>
					</div>
				</div>
			}
		</div>
	)
}

export default MatchPage
