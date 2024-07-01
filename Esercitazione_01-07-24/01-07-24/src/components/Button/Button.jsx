import './Button.css';

function Button({buttonClass, spanClass, onClick}) {
	return (
	<button className={buttonClass} onClick={onClick}>
		<span className={spanClass}></span>
		<span className="red"></span>
	</button>
	)
}

export default Button;