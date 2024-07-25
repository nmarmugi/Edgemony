import styles from './cardPlayer.module.css'

function CardPlayer({idCard, nameCard, rateCard, onClick}) {
	return (
		<div id={idCard} className={styles.card}>
			<img className={styles.imgCard} src='/img/volleyball-player.png' alt="Avatar" />
			<span className={styles.nameCard}>Name: {nameCard}</span>
			<span className={styles.rateCard}>Rate: {rateCard}</span>
			<button className={styles.buttonCard} onClick={onClick}>DELETE</button>
		</div>
	)
}

export default CardPlayer