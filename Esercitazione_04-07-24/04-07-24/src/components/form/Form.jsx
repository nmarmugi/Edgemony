import styles from './form.module.css'
import { useState } from 'react'
import { useRef } from 'react'

function Form() {
	const inputRefAmount = useRef(null);
	const inputRefTerm = useRef(null);
	const inputRefRate = useRef(null);
	const displayResult = useRef(null);
	const displayPrev = useRef(null);
	const firstResult = useRef(null);
	const secondResult = useRef(null);

	const [inputValue, setInputValue] = useState({
		amount: '',
		years: '',
		percent: '',
		option: ''
	})

	function handleChange(e) {
		console.log(inputValue)
		const value = e.target.value;
		const key = e.target.name;
		setInputValue((prevState) => ({...prevState, [key]: value}))
	}

	function prevent(e){
		e.preventDefault()
	}

	function send(){
		const result = Number(inputValue.amount) * Number(inputValue.years);
		const percent = (result / 100) * Number(inputValue.percent);
		const total = result + percent;
		firstResult.current.textContent = `£${total}`;
		secondResult.current.textContent = `£${result}`;
		displayPrev.current.style.display = 'none';
		displayResult.current.style.display = 'flex';
	}
	
	function clearAll() {
        inputRefAmount.current.value = '';
		inputRefRate.current.value = '';
		inputRefTerm.current.value = '';
		displayPrev.current.style.display = 'flex';
		displayResult.current.style.display = 'none';
	}

	return (
		<form onSubmit={prevent} className={styles.form}>
			<div className={styles.containerInput}>
				<div className={styles.containerTitle}>
					<h1 className={styles.title}>Mortgage Calculator</h1>
					<span onClick={clearAll} className={styles.buttonClear}>Clear All</span>
				</div>
				<div className={styles.containerAmount}>
					<label className={styles.labelAmount} htmlFor="amount">Mortgage Amount</label>
					<div className={styles.containerInputAmount}>
						<span className={styles.spanAmount}>£</span>
						<input ref={inputRefAmount} onChange={handleChange} name='amount' className={styles.inputAmount} type="text" id='amount'/>
					</div>
				</div>
				<div className={styles.containerTermAndRate}>
					<div className={styles.containerTerm}>
						<label className={styles.labelTerm} htmlFor="term">Mortgage Term</label>
						<div className={styles.containerInputTerm}>
							<input ref={inputRefTerm} onChange={handleChange} name='years' className={styles.inputTerm} type='text' id='term'/>
							<span className={styles.spanTerm}>years</span>
						</div>
					</div>
					<div className={styles.containerRate}>
						<label className={styles.labelRate} htmlFor="rate">Interest Rate</label>
						<div className={styles.containerInputRate}>
							<input ref={inputRefRate} onChange={handleChange} name='percent' className={styles.inputRate} type='text' id='rate'/>
							<span className={styles.spanRate}>%</span>
						</div>
					</div>
				</div>
				<div className={styles.containerType}>
					<label className={styles.labelType}>Mortgage Type</label>
					<div className={styles.containerRepayment}>
						<input className={styles.inputRepayment} type="radio" name='option' onChange={handleChange} id='repayment' value='yes' />
						<label className={styles.labelRepayment} htmlFor="repayment">Repayment</label>
					</div>
					<div className={styles.containerInterest}>
						<input className={styles.inputInterest} type="radio" name='option' onChange={handleChange} id='interest' value='no' />
						<label className={styles.labelInterest} htmlFor="interest">Interest Only</label>
					</div>
				</div>
				<button onClick={send} className={styles.buttonCalculate}><img src="./images/icon-calculator.svg" alt="Immagine calcolatrice" /> Calculate Repayments</button>
			</div>
			<div className={styles.containerResult}>
				<div ref={displayPrev} className={styles.containerPrev}>
					<img src="./images/illustration-empty.svg" alt="Immagine illustrazione" />
					<h2 className={styles.titlePrev}>Results shown here</h2>
					<p className={styles.pPrev}>
						Complete the form and click "calculate 
						repayments" to see what your monthly repayments would be.
					</p>
				</div>
				<div ref={displayResult} className={styles.containerAfterSubmit}>
					<h2 className={styles.titleResult}>Your results</h2>
					<p className={styles.pResult}>
						Your results are shown below based on the information
						you provided. To adjust the results, edit the form and
						click "calculate repayments" again.
					</p>
					<div className={styles.showResults}>
						<div className={styles.monthly}>
							<h3>Your monthly repayments</h3>
							<p ref={firstResult}></p>
						</div>
						<div className={styles.total}>
							<h3>Total you'll repay over the term</h3>
							<p ref={secondResult}></p>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default Form