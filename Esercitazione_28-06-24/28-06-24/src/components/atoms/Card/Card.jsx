import './Card.css'

function Card({image, title, price}) {
	return (
		<div className="card">
			<div className="container-card-img">
				<img src={image} alt="Immagine card" />
			</div>
			<div className="container-card-text">
				<h3>{title}</h3>
				<span>{price} $</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Architecto iste quidem sit suscipit. Soluta laudantium 
					commodi consequatur earum amet, laboriosam in accusantium 
					praesentium itaque et architecto doloremque totam dicta 
					eius.
				</p>
			</div>
		</div>
	)
}

export default Card