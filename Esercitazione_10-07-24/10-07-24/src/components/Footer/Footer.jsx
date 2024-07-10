import styles from './footer.module.css'

function Footer() {
	return (
		<footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <img src="/images/pokeball.png" alt="Pokeball" />
                </div>
                <div className={styles.footerText}>
                    <p>Explore the world of Pokémon!</p>
                    <p>© 2024 Pokémon. All rights reserved.</p>
                </div>
            </div>
        </footer>
	)
}

export default Footer