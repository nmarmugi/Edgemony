import styles from './form.module.css'
import { useState } from 'react'

function Form(){
	const [inputValue, setInputValue] = useState({
		range: 0,
		check: false
	})

	function discount(value) {
		const minusValue = (value / 100) * 25;
		const newValue = value - minusValue;
		return newValue;
	}

	function handleCheck() {
		setInputValue((prevState) => ({...prevState, check: !prevState.check}))
	}

	function handleChange(e) {
		const {name, value} = e.target;
		setInputValue((prevState) => ({...prevState, [name]: value}))
	}

	return (
		<form className={styles.containerForm}>
			<div className={styles.firstContent}>
				<h2 className={styles.titleForm}>100K PAGEVIEWS</h2>
				<div className={styles.containerRate}>
					<h2 className={styles.price}>$ {inputValue.check ? discount(inputValue.range) : inputValue.range}</h2>
					<span className={styles.spanPrice}>/ month</span>
				</div>
			</div>
			<input name='range' className={styles.inputRange} type="range" min='0' max='50' value={inputValue.range} onChange={handleChange} />
			<div className={styles.secondContent}>
				<label className={styles.labelSwitch} htmlFor="switch">Monthly Billing</label>
				<label className={styles.containerSwitch}>
					<input name='check' id="switch" className={styles.switch} type="checkbox" onChange={handleCheck} defaultChecked={inputValue.check} />
					<span className={styles.slider}></span>
				</label>
				<label className={styles.labelYearly}>Yearly Billing</label>
				<span className={styles.spanDiscount}>25% discount</span>
			</div>
			<div className={styles.thirdContent}>
				<ul className={styles.list}>
					<li className={styles.listItem}><img src="./img/check_12533288.png" alt="check" /> Unlimited websites</li>
					<li className={styles.listItem}><img src="./img/check_12533288.png" alt="check" /> 100% data ownership</li>
					<li className={styles.listItem}><img src="./img/check_12533288.png" alt="check" /> Email reports</li>
				</ul>
				<input className={styles.submitButton} type="submit" value='Start my trial'/>
			</div>
		</form>
	)
}

export default Form