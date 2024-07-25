import { useEffect, useState } from 'react';
import styles from './formPage.module.css';
import { NavLink } from 'react-router-dom'

function FormPage() {

	const [inputValue, setInputValue] = useState({id: self.crypto.randomUUID(), player: '', rate: ''})
	const [storage, setStorage] = useState(() => {
		const savedPlayers = localStorage.getItem('players');
		return savedPlayers ? JSON.parse(savedPlayers) : [];
	});

	function handleChange(e) {
		if (e.target.type === 'text') {
			const player = e.target.value
			setInputValue((prevState => {return {...prevState, player: player}}))
		} else {
			const rate = e.target.value
			setInputValue((prevState => {return {...prevState, rate: rate}}))
		}
	}

	function handleClick() {
		setStorage((prevState => [...prevState, inputValue]))
		window.location.reload()
	}

	useEffect(() => {
		localStorage.setItem('players', JSON.stringify(storage))
	}, [storage])

	return (
	<div className={styles.containerForm}>
		<NavLink className={styles.backToHome} to='/'>
			<img src="/img/beach-volleyball_7779940.png" alt="Icona Home" />
			<span>BACK TO HOME</span>
		</NavLink>
		<div className={styles.containerInput}>
			<div className={styles.containerInputText}>
				<input onChange={handleChange} id='name' type="text" />
				<label className={inputValue.player ? styles.positionLabel : styles.label} htmlFor="name">Player's Name</label>
			</div>
			<div className={styles.rate}>Rate</div>
			<div className={styles.rating}>
				<input onChange={handleChange} type="radio" id="star-1" name="star-radio" value="5" />
				<label htmlFor="star-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
					</svg>
				</label>
				<input onChange={handleChange} type="radio" id="star-2" name="star-radio" value="4" />
				<label htmlFor="star-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
					</svg>
				</label>
				<input onChange={handleChange} type="radio" id="star-3" name="star-radio" value="3" />
				<label htmlFor="star-3">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
					</svg>
				</label>
				<input onChange={handleChange} type="radio" id="star-4" name="star-radio" value="2" />
				<label htmlFor="star-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
					</svg>
				</label>
				<input onChange={handleChange} type="radio" id="star-5" name="star-radio" value="1" />
				<label htmlFor="star-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
					</svg>
				</label>
			</div>
			<button onClick={handleClick} className={styles.buttonSend}>SEND</button>
		</div>
    </div>
	)
}

export default FormPage;
