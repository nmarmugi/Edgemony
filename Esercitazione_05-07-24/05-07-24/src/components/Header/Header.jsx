import styles from './header.module.css'

function Header() {
	return (
		<div className={styles.containerHeader}>
			<h1 className={styles.title}>Simple, traffic-based pricing</h1>
			<p className={styles.paragraph}>Sing-up for our 30-day trial. No credit card required</p>
		</div>
	)
}

export default Header