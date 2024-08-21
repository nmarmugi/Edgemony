import Link from '../Link/Link'
import styles from './projectCard.module.css'

export default function ProjectCard({urlImg, onClick, idNavigate}) {
	return (
		<div className={styles.projectCard}>
			<img src={urlImg} alt="Immagine progetto" />
			<Link classView={styles.view} idNavigate={idNavigate} onClick={onClick} />
		</div>
	)
}