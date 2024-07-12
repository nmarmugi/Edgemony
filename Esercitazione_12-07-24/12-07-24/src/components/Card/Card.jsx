function Card({children}){
	return (
		<div className="bg-[#09182B] rounded-3xl text-center px-8 pb-28 pt-8">
			<div className="bg-[#14253F] w-80 pt-5 px-5 flex flex-col rounded-2xl items-start gap-4">
				<div className="group relative cursor-pointer">
					<img className="w-72 rounded-xl" src="./img/image-equilibrium.jpg" alt="Immagine card" />
					<div className="bg-[#7bf9f993] rounded-xl hidden items-center justify-center absolute top-0 left-0 w-full h-full group-hover:flex">
						<img src="./img/icon-view.svg" alt="Icon" />
					</div>
				</div>
				<h1 className="font-bold text-xl text-white cursor-pointer hover:text-[#7BF8F9] transition-all duration-300 ease">Equilibrium #3429</h1>
				<p className="text-white text-left font-thin">Our Equilibrium collection promotes balance and calm.</p>
				<div className="flex justify-between w-full border-b-2 border-[#26354F] pb-4">
					<div className="flex items-center gap-1">
						<img className="w-3 h-5" src="./img/icon-ethereum.svg" alt="Icona" />
						<span className="font-bold text-[#7BF8F9]">0.041ETH</span>
					</div>
					<div className="flex items-center gap-1">
						<img src="./img/icon-clock.svg" alt="Icona" />
						<span className="text-[#8BACD9]">3 days left</span>
					</div>
				</div>
				<div className="flex items-center gap-3 pb-5">
					<img className="w-8 border-white border rounded-full" src="./img/image-avatar.png" alt="Avatar" />
					<span className="text-[#8BACD9] text-sm">Creation of <span className="text-white hover:text-[#7BF8F9] cursor-pointer transition-all duration-300 ease">Nicola Marmugi</span></span>
				</div>
			</div>
		</div>
	)
}

export default Card