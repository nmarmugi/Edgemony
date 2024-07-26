import styles from './cardPlayer.module.css'

function CardPlayer({idCard, nameCard, children, onClick}) {
	return (
		<div id={idCard} className={styles.card}>
			<img className={styles.imgCard} src='/img/volleyball-player.png' alt="Avatar" />
			<span className={styles.nameCard}>Name: {nameCard}</span>
			{children}
			<button className={styles.buttonCard} onClick={onClick}>DELETE</button>
		</div>
	)
}

export default CardPlayer