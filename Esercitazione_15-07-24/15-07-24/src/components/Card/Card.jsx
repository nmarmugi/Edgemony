function Card({ adviceID, adviceText, onClick, isLoading, isError}) {
	return (
	<div className="bg-[#3b4553] text-white p-8 rounded-2xl w-96 h-60 max-w-96 max-h-60 shadow-md flex flex-col items-center relative gap-4">
		{isError ? <div className="w-full h-28 flex justify-center items-center"><div className="text-[#00FFA3]">ERROR</div></div> : isLoading ? (
			<>
			<h1 className="text-[#00FFA3] text-xs">ADVICE #{adviceID}</h1>
			<p className="h-24 max-h-24 text-xl font-semibold text-center">"{adviceText}"</p>
			</>
		) : (
			<div className="w-full h-28 flex justify-center items-center">
				<div className="w-7 h-7 rounded-full border-2 border-[#00FFA3] border-t-0 animate-spin"></div>
			</div>
		)}
		<img className="w-full" src="./img/pattern-divider-desktop.svg" alt="Immagine divisoria" />
		<button onClick={onClick} className="bg-[#00FFA3] border-none w-12 h-12 rounded-full cursor-pointer absolute -bottom-6 flex justify-center items-center transition-all duration-300 ease hover:shadow-custom">
			<img className="w-5" src="./img/icon-dice.svg" alt="Immagine bottone" />
		</button>
	</div>
	)
}

export default Card;
