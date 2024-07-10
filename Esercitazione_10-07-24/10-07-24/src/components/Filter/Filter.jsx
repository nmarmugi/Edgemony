import styles from './filter.module.css'

function Filter({forInput, children, typeInput, inputID, textInput, onChange}) {
	return (
		<div className={styles.containerFilter}>
			<label className={styles.inputLabel} htmlFor={forInput}>{children}</label>
			<input onChange={onChange} className={styles.input} placeholder={textInput} id={inputID} type={typeInput} />
		</div>
	)
}

export default Filter