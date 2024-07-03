function Input({containerClass, labelClass, htmlFor, name, spanClass, idInput, onChange, type, inputClass, children}) {
	return (
		<div className={containerClass}>
			<label htmlFor={htmlFor} className={labelClass}>{children} <span className={spanClass}>*</span></label>
			<input className={inputClass} id={idInput} onChange={onChange} name={name} type={type} />
		</div>
	)
}

export default Input