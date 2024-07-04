import styles from './form.module.css';
import { useState, useRef } from 'react';

function Form() {
	const inputRefAmount = useRef(null);
	const inputRefTerm = useRef(null);
	const inputRefRate = useRef(null);
	const displayResult = useRef(null);
	const displayPrev = useRef(null);
	const checkOne = useRef(null);
	const checkTwo = useRef(null);

	const [inputValue, setInputValue] = useState({
		amount: '',
		years: '',
		percent: '',
		option: '',
		result: '',
		total: ''
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setInputValue((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function calculateResult() {
		const { amount, years, percent, option } = inputValue;
		const principal = parseFloat(amount);
		const term = parseFloat(years);
		const rate = parseFloat(percent) / 100;

		if (isNaN(principal) || isNaN(term) || isNaN(rate)) {
			alert("Per favore, inserisci numeri validi per tutti i campi.");
			return;
		}

		let resultNumber = 0;
		let totalNumber = 0;

		if (option === 'yes') { // Mutuo di rimborso
			const monthlyRate = rate / 12;
			const numberOfPayments = term * 12;
			const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
			resultNumber = monthlyPayment * numberOfPayments;
			totalNumber = monthlyPayment;
		} else if (option === 'no') { // Solo interessi
			resultNumber = principal;
			totalNumber = principal * rate;
		}

		setInputValue((prevState) => ({
			...prevState,
			result: resultNumber.toFixed(2),
			total: totalNumber.toFixed(2),
		}));
	}

	function prevent(e) {
		e.preventDefault();
	}

	function send() {
		calculateResult();
		displayPrev.current.style.display = 'none';
		displayResult.current.style.display = 'flex';
	}

	function clearAll() {
		inputRefAmount.current.value = '';
		inputRefRate.current.value = '';
		inputRefTerm.current.value = '';
		checkOne.current.checked = false;
		checkTwo.current.checked = false;
		setInputValue({
			amount: '',
			years: '',
			percent: '',
			option: '',
			result: '',
			total: ''
		});
		displayPrev.current.style.display = 'flex';
		displayResult.current.style.display = 'none';
	}

	return (
		<form onSubmit={(e) => prevent(e)} className={styles.form}>
			<div className={styles.containerInput}>
				<div className={styles.containerTitle}>
					<h1 className={styles.title}>Calcolatore di Mutui</h1>
					<span onClick={clearAll} className={styles.buttonClear}>Cancella Tutto</span>
				</div>
				<div className={styles.containerAmount}>
					<label className={styles.labelAmount} htmlFor="amount">Importo del Mutuo</label>
					<div className={styles.containerInputAmount}>
						<span className={styles.spanAmount}>€</span>
						<input ref={inputRefAmount} onChange={(e) => handleChange(e)} name='amount' className={styles.inputAmount} type="text" id='amount'/>
					</div>
				</div>
				<div className={styles.containerTermAndRate}>
					<div className={styles.containerTerm}>
						<label className={styles.labelTerm} htmlFor="term">Durata del Mutuo</label>
						<div className={styles.containerInputTerm}>
							<input ref={inputRefTerm} onChange={(e) => handleChange(e)} name='years' className={styles.inputTerm} type='text' id='term'/>
							<span className={styles.spanTerm}>anni</span>
						</div>
					</div>
					<div className={styles.containerRate}>
						<label className={styles.labelRate} htmlFor="rate">Tasso di Interesse</label>
						<div className={styles.containerInputRate}>
							<input ref={inputRefRate} onChange={(e) => handleChange(e)} name='percent' className={styles.inputRate} type='text' id='rate'/>
							<span className={styles.spanRate}>%</span>
						</div>
					</div>
				</div>
				<div className={styles.containerType}>
					<label className={styles.labelType}>Tipo di Mutuo</label>
					<div className={styles.containerRepayment}>
						<input ref={checkOne} className={styles.inputRepayment} type="radio" name='option' onChange={(e) => handleChange(e)} id='repayment' value='yes' />
						<label className={styles.labelRepayment} htmlFor="repayment">Rimborso</label>
					</div>
					<div className={styles.containerInterest}>
						<input ref={checkTwo} className={styles.inputInterest} type="radio" name='option' onChange={(e) => handleChange(e)} id='interest' value='no' />
						<label className={styles.labelInterest} htmlFor="interest">Solo Interessi</label>
					</div>
				</div>
				<button onClick={send} className={styles.buttonCalculate}><img src="./images/icon-calculator.svg" alt="Immagine calcolatrice" /> Calcola Rimborso</button>
			</div>
			<div className={styles.containerResult}>
				<div ref={displayPrev} className={styles.containerPrev}>
					<img src="./images/illustration-empty.svg" alt="Immagine illustrazione" />
					<h2 className={styles.titlePrev}>Risultati mostrati qui</h2>
					<p className={styles.pPrev}>
						Completa il modulo e clicca "calcola rimborso" per vedere 
						quali sarebbero i tuoi pagamenti mensili.
					</p>
				</div>
				<div ref={displayResult} className={styles.containerAfterSubmit}>
					<h2 className={styles.titleResult}>I tuoi risultati</h2>
					<p className={styles.pResult}>
						I tuoi risultati sono mostrati qui sotto in base alle informazioni
						che hai fornito. Per aggiustare i risultati, modifica il modulo e
						clicca di nuovo "calcola rimborso".
					</p>
					<div className={styles.showResults}>
						<div className={styles.monthly}>
							<h3>Il tuo pagamento mensile</h3>
							<p>€{inputValue.total}</p>
						</div>
						<div className={styles.total}>
							<h3>Totale che pagherai nel termine</h3>
							<p>€{inputValue.result}</p>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Form;
