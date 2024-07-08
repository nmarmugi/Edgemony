import styles from './form.module.css'
import Item from '../Item/Item'
import Button from '../Button/Button'
import { useState } from 'react'

function Form() {
	const [inputValue, setInputValue] = useState('')
	const [toDos, setToDos] = useState([])

	function handleClick(e) {
		e.preventDefault();
		if (inputValue.length == 0) return;
		setToDos((prevState) => ([...prevState, {id: self.crypto.randomUUID(), title: inputValue}]))
		setInputValue('')
	}

	function handleDelete(e) {
		const newArray = toDos.filter(item => (item.id !== e.target.id))
		setToDos(newArray)
	}

	function handleChange(e) {
		const value = e.target.value;
		setInputValue(value)
	}

	return (
		<>
		<form className={styles.form} onSubmit={handleClick}>
			<input placeholder='ToDos...' className={styles.inputText} value={inputValue} type="text" onChange={handleChange} />
			<img className={styles.imgSmile} src="./img/img1.png" alt="Icon" />
			<img className={styles.imgSmileTwo} src="./img/img2.png" alt="Icon" />
			<input className={styles.buttonAdd} type="submit" value='ADD' />
		</form>
		<ul>
			{toDos.map(item => (<Item key={item.id}><img className={styles.puntina} src="./img/puntina.png" alt="Puntina" />{item.title}<Button buttonID={item.id} onClick={handleDelete} /></Item>))}
		</ul>
		</>
	)
}

export default Form