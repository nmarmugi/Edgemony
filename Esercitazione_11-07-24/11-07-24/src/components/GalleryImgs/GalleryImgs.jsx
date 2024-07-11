import classNames from "classnames";
import styles from './galleryImgs.module.css'

function GalleryImgs({imgGalleryImg, onClick, isTrue = false}) {
	return (
		<div onClick={onClick} className={classNames(styles.containerGalleryImg, isTrue && styles.border)}>
			<img src={imgGalleryImg} alt="Immagine scarpe galleria" />
			<div className={classNames(isTrue && styles.over)}></div>
		</div>
	)
}

export default GalleryImgs