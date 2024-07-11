import classNames from "classnames";
import styles from './counter.module.css'
import IconMinus from "../Icons/IconMinus";
import IconPlus from "../Icons/IconsPlus";

function Counter({count, onClick}) {
	return (
	<div className={classNames(styles.counter)}>
		<button className={styles.buttonCount} id="minus" onClick={onClick}><IconMinus /></button>
		<div>{count}</div>
		<button className={styles.buttonCount} id="plus" onClick={onClick}><IconPlus /></button>
	</div>
	)
}

export default Counter