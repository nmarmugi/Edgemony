import styles from './button.module.css'

function Button({onClick, buttonID}) {
	return <button className={styles.button} title='Remove ToDo' onClick={onClick} id={buttonID}>&times;</button>
}

export default Button