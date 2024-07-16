import styles from './letter.module.css'
import classNames from 'classnames';

function Letter({letter, classLetter}) {
	return (
		<div className={classNames(styles.letter, classLetter, { [styles.space]: /\s/.test(letter) })}>{letter}</div>
	)
}

export default Letter