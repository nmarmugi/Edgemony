function Button({isClicked, onClick}) {
	return (
		<button isClick={isClicked} onClick={onClick} className="relative bg-[#46393D] p-3 rounded-md text-[#F8C272] cursor-pointer">Set countdown</button>
	)
}

export default Button