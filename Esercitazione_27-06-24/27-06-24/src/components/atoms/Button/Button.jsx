import './Button.css'

function Button({children, onClick}) {
	return (
		<button className='button' onClick={() => onClick(children)}>
			<span className="shadow"></span>
			<span className="edge"></span>
			<span className="front text">{children}</span>
		</button>
	)
}

export default Button