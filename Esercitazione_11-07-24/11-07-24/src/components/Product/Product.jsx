import classNames from "classnames";
import styles from './product.module.css'

function Product({children, costDiscount, discount, originalPrice}) {
	return (
		<>
			<h2>SNEAKER COMPANY</h2>
			<h1>Fall Limited Edition Sneakers</h1>
			<p>
				These low-profile sneakers are you perfect casual
				wear companion. Featuring a durable rubber outer
				sole, they'll withstand everything the weather can
				offer.
			</p>
			<div className={classNames(styles.containerDiscount)}>
				<span className={classNames(styles.spanDiscount)}>${costDiscount}</span>
				<span className={classNames(styles.spanDiscountTwo)}>{discount}%</span>
			</div>
			<span className={classNames(styles.originalPrice)}>${originalPrice}</span>
			<div className={classNames(styles.containerComponents)}>
				{children}
			</div>
		</>
	)
}

export default Product