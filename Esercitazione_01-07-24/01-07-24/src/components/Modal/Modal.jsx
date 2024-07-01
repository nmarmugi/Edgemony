import './Modal.css'

function Modal(){

	function closeModal(){
		const modal = document.querySelector('.container-modal');
		modal.style.display = 'none';
	}

	return (
		<div className="container-modal">
			<div className="modal">
				<span className='close' onClick={closeModal}>&times;</span>
				<img src="./img/no_10554134.png" alt="Immagine Modale" width={200} />
			</div>
		</div>
	)
}

export default Modal