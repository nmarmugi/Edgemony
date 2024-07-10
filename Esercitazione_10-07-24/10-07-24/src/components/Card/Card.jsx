import styles from './card.module.css'

function Card({imgCard, titleCard, idCard, descriptionCard, typeCard}) {
	return (
		<div className={styles.containerCard}>
			<div className={styles.containerImgCard}>
				<img className={styles.imgCard} src={imgCard} alt="Immagine Pokemon" />
			</div>
			<h2 className={styles.titleCard}>{titleCard}</h2>
			<span className={styles.spanCardID}>#{idCard}</span>
			<p className={styles.descriptionCard}>{descriptionCard}</p>
			<span className={styles.spanCardType}>{typeCard}</span>
		</div>
	)

}

export default Card