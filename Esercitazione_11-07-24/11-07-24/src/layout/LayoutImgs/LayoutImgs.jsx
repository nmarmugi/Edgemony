import styles from './layoutImgs.module.css'

function LayoutImgs({children}) {
	return (
		<div className={styles.images}>
			{children}
		</div>
	)
}

export default LayoutImgs