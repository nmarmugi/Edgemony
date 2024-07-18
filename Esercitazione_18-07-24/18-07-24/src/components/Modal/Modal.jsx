import { createPortal } from "react-dom"

function Modal({children, isOpen, closeModal}) {
	return createPortal (
		<>
		{isOpen && (
			<div className="absolute bg-transparent w-full h-full top-0">
				<div className="fixed top-1/2 left-1/2 -translate-x-24 -translate-y-32 bg-white w-52 h-64 rounded-lg overflow-hidden text-center">
					<span className="absolute right-2 font-bold text-3xl hover:text-red-300 transition-all duration-300 ease cursor-pointer" onClick={closeModal}>&times;</span>
					{children}
				</div>
			</div>
		)}
		</>, document.body
	)
}

export default Modal