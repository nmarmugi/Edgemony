import styles from './card.module.css'

function Card({idCard, img, title, description, onClick}) {
	return (
		<div id={idCard} className={styles.card}>
			<img className={styles.imgCard} src={img} alt="Immagine random" />
			<h2 className={styles.titleCard}>{title}</h2>
			<p className={styles.descriptionCard}>{description}</p>
			<button onClick={onClick} className={styles.deleteButton}>Delete</button>
		</div>
	)
}

export default Card