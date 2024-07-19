function Card({cardId, cardTitle, cardDescription, cardPrice, onClick, textButton}) {
	return (
		<div id={cardId} className="w-72 min-h-[424px] bg-slate-200 rounded-md p-3 flex flex-col gap-3 items-center">
			<h2 className="font-bold text-2xl">{cardTitle}</h2>
			<div className="w-full h-12 overflow-hidden">
				<p className="text-"><i>{cardDescription}</i></p>
			</div>
			<span className="font-bold w-full">Continua a leggere...</span>
			<span className="bg-white p-3 rounded-md">£ {cardPrice}</span>
			<button className="bg-slate-400 p-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ease" onClick={onClick}>{textButton}</button>
		</div>
	)
}

export default Card