function Modal({onClick, isOpen}) {
	return (
		<div className={isOpen ? 'flex absolute top-0 left-0 w-full h-full items-center justify-center bg-[#0000005e]' : 'hidden'}>
			<div>
				<span onClick={onClick} className=" mr-5 float-right text-4xl text-white hover:text-[#7BF8F9] cursor-pointer transition-all ease duration-300">&times;</span>
				<div className="m-12">
					<img className="rounded-2xl" src="./img/image-equilibrium.jpg" alt="Immagine" />
				</div>
			</div>
		</div>
	)
}

export default Modal