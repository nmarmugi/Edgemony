import Social from '../Tooltip/TooltipSocial';
import styles from './footer.module.css'

export default function Footer() {

	const email = 'nicolamarmugi1@gmail.com';

	return (
		<div className={styles.containerFooter}>
			<div className={styles.containerImg}>
				<img src="/img/DSC_0981-bianca-photoaidcom-cropped-removebg-preview-photoaidcom-cropped.png" alt="Foto Nicola Marmugi" />
			</div>
			<Social />
			<div className={styles.built}>
				<p>Built with React.js</p>
				<span>2024</span>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
		</div>
	)
}