function Card({cardId, cardImg, cardTitle, cardPrice, cardCategory, onClick, buttonMessage}) {
	return (
		<div className="pb-8 w-72 min-w-72 h-96 max-h-96 border flex flex-col rounded-lg overflow-hidden shadow-md" id={cardId}>
			<div className="w-full h-48">
				<img className="w-full h-full object-cover" src={cardImg} alt="Immagine" />
			</div>
			<div className="p-3 flex flex-col gap-2 justify-center items-center">
				<h2 className="font-bold text-center">{cardTitle}</h2>
				<p className="bg-red-300 p-1 rounded font-bold">$ {cardPrice}</p>
				<p className="text-xs">"{cardCategory}"</p>
				<button value={cardId} onClick={onClick} className="border p-2 rounded hover:bg-red-300 hover:text-white transition-all duration-300 ease">{buttonMessage}</button>
			</div>
		</div>
	)
}

export default Card