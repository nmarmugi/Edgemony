import styles from './calculate.module.css'
import { useState } from 'react'

function Calculate() {
	const [inputValue, setInputValue] = useState({
		day: 0,
		month: 0,
		year: 0,
		click: false
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setInputValue((prevState) => ({ ...prevState, [name]: value }));
	}

	function getActualDate({ year, month, day }) {
		const nascita = new Date(year, month - 1, day);
		const oggi = new Date();

		let anni = oggi.getFullYear() - nascita.getFullYear();
		let mesi = oggi.getMonth() - nascita.getMonth();
		let giorni = oggi.getDate() - nascita.getDate();

		if (giorni < 0) {
			mesi--;
			giorni += new Date(oggi.getFullYear(), oggi.getMonth(), 0).getDate();
		}
		if (mesi < 0) {
			anni--;
			mesi += 12;
		}
		return { anni, mesi, giorni };
	}

	function handleClick() {
		setInputValue((prevState) => ({ ...prevState, click: true }));
	}

	const age = inputValue.click ? getActualDate(inputValue) : { anni: 0, mesi: 0, giorni: 0 };

	return (
		<div className={styles.container}>
			<div className={styles.firstContainer}>
				<div className={styles.containerDate}>
					<label className={styles.labelDate} htmlFor="day">DAY</label>
					<input name='day' className={styles.inputDate} id='day' type="number" onChange={handleChange} />
				</div>
				<div className={styles.containerDate}>
					<label className={styles.labelDate} htmlFor="month">MONTH</label>
					<input name='month' className={styles.inputDate} id='month' type="number" onChange={handleChange} />
				</div>
				<div className={styles.containerDate}>
					<label className={styles.labelDate} htmlFor="year">YEAR</label>
					<input name='year' className={styles.inputDate} id='year' type="number" onChange={handleChange} />
				</div>
				<button onClick={handleClick}><img src="./img/download_248351.png" alt="Icon" /></button>
			</div>
			<div className={styles.results}>
				<h2 className={styles.result}><span className={styles.spanResult}>{age.anni}</span> years</h2>
				<h2 className={styles.result}><span className={styles.spanResult}>{age.mesi}</span> months</h2>
				<h2 className={styles.result}><span className={styles.spanResult}>{age.giorni}</span> days</h2>
			</div>
		</div>
	)
}

export default Calculate;
