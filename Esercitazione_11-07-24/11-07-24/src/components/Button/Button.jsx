import classNames from 'classnames'
import styles from './button.module.css'

function Button({children, textButton}) {
	return (
		<button className={classNames(styles.button)}>
			{children}
			{textButton}
		</button>
	)
}

export default Button