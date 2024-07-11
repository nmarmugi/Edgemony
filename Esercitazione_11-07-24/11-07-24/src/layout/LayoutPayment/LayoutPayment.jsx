import styles from './layoutPayment.module.css'

function LayoutPayment({children}) {

	return (
		<div className={styles.product}>
			{children}
		</div>
	)
}

export default LayoutPayment