import styles from './item.module.css'

function Item({children}) {
	return (
		<li className={styles.item}>{children}</li>
	)
}

export default Item