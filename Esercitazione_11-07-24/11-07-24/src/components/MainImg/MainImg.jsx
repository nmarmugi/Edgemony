import classNames from "classnames";
import styles from './mainImg.module.css'

function MainImg({mainImgUrl}) {
	return (
		<div className={classNames(styles.containerMainImg)}>
			<img src={mainImgUrl} alt="Immagine scarpa" />
		</div>
	)
}

export default MainImg