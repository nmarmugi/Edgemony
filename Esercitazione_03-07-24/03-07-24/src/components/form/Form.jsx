import styles from './form.module.css'
import { useState } from 'react';
import Input from '../input/Input';

function Form() {

	const [inputValue, setInputValue] = useState({
		firstName: '',
		lastName: '',
		email: '',
		option: '',
		message: '',
		check: '❌'
	});

	function handleChange(e) {
		const key = e.target.name;
		let value = e.target.value
		const checked = e.target.checked;
		if (key === 'check' && checked) {
			value = '✅';
		}
		if (key === 'check' && !checked) {
			value = '❌';
		}
		setInputValue((prevState) => ({...prevState, [key]: value}))
	}

	return (
		<>
		<form className={styles.form}>
			<h1>Contact Us</h1>
			<div className={styles.nameAndSurname}>
				<Input containerClass={styles.name} labelClass={styles.labelName} htmlFor={'firstName'} spanClass={styles.span} idInput={'firstName'} name={'firstName'} onChange={(e) => handleChange(e)} type={'text'} inputClass={styles.inputName}>{'First Name'}</Input>
				<Input containerClass={styles.surname} labelClass={styles.labelSurname} htmlFor={'lastName'} spanClass={styles.span} idInput={'lastName'} name={'lastName'} onChange={(e) => handleChange(e)} type={'text'} inputClass={styles.inputSurname}>{'Last Name'}</Input>
			</div>
			<Input containerClass={styles.email} labelClass={styles.labelEmail} htmlFor={'email'} spanClass={styles.span} idInput={'email'} name={'email'} onChange={(e) => handleChange(e)} type={'email'} inputClass={styles.inputEmail}>{'Email Address'}</Input>
			<div className={styles.containerRadioButtons}>
				<label className={styles.labelRadio}>Query Type <span className={styles.span}>*</span></label>
				<div className={styles.radioButtons}>
					<div className={styles.firstRadio}>
						<input onChange={(e) => handleChange(e)} name='option' id='firstRadio' type="radio" value='General Enquiry'/>
						<label htmlFor='firstRadio' className={styles.labelFirstRadio}>General Enquiry</label>
					</div>

					<div className={styles.secondRadio}>
						<input onChange={(e) => handleChange(e)} name='option' id='secondRadio' type="radio" value='Support Request'/>
						<label htmlFor='secondRadio' className={styles.labelSecondRadio}>Support Request</label>
					</div>
				</div>
			</div>
			<div className={styles.message}>
				<label htmlFor='textarea' className={styles.labelMessage}>Message <span className={styles.span}>*</span></label>
				<textarea id='textarea' onChange={(e) => handleChange(e)} className={styles.textarea} name='message'/>
			</div>
			<div className={styles.checkbox}>
				<input name='check' id='checkbox' type="checkbox" onChange={(e) => handleChange(e)} />
				<label htmlFor='checkbox'>I consent to being contacted by the team <span className={styles.span}>*</span></label>
			</div>
			<button className={styles.formButton}>Submit</button>
		</form>
		<div className={styles.result}>
			<h2>First Name: {inputValue.firstName}</h2>
			<h2>Last Name: {inputValue.lastName}</h2>
			<h2>Email Address: {inputValue.email}</h2>
			<h2>Options: {inputValue.option}</h2>
			<h2>Message: {inputValue.message}</h2>
			<h2>Check: {inputValue.check}</h2>
		</div>
		</>
	)
}

export default Form