import styles from './initialPage.module.css'

function InitialPage({display}) {
	return (
		<div className={display ? styles.initialPage : styles.displayNONE}>
			<div className={styles.containerInitialPageImg}>
				<img src="/img/low-angle-women-playing-volleyball.jpg" alt="Immagine iniziale" />
			</div>
			<img className={styles.logo} src="/img/BVTeams-removebg-preview.png" alt="Logo" />
			<div className={styles.messageLoading}>Waiting to retrieve the ball..</div>
			<div className={styles.loading}></div>
		</div>
	)
}

export default InitialPage