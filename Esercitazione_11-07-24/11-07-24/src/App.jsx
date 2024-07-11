import styles from './App.module.css'
import LayoutNavbar from './layout/LayoutNavbar/LayoutNavbar'
import LayoutImgs from './layout/LayoutImgs/LayoutImgs'
import MainImg from './components/MainImg/MainImg'
import GalleryImgs from './components/GalleryImgs/GalleryImgs'
import LayoutPayment from './layout/LayoutPayment/LayoutPayment'
import Product from './components/Product/Product'
import Counter from './components/Counter/Counter'
import Button from './components/Button/Button'
import IconCart from './components/Icons/IconCart'
import { useState } from 'react'

const products = [
  {
    id: self.crypto.randomUUID(),
    mainImg: './images/image-product-1.jpg',
    galleryImg: './images/image-product-1-thumbnail.jpg'
  },
  {
    id: self.crypto.randomUUID(),
    mainImg: './images/image-product-2.jpg',
    galleryImg: './images/image-product-2-thumbnail.jpg'
  },
  {
    id: self.crypto.randomUUID(),
    mainImg: './images/image-product-3.jpg',
    galleryImg: './images/image-product-3-thumbnail.jpg'
  },
  {
    id: self.crypto.randomUUID(),
    mainImg: './images/image-product-4.jpg',
    galleryImg: './images/image-product-4-thumbnail.jpg'
  }
]

function App() {
  const [cart, setCart] = useState(0)
  const [imgs, setImgs] = useState(products[0])// X LAYOUT IMGS
  const [count, setCount] = useState(0);// X LAYOUT PAYMENT
  // LAYOUT PAYMENT

	function handleCount(e) {
		const id = e.target.id;
		if (count === 0 && id === 'minus') {
			return;
		}
		id === 'minus' ? setCount(count - 1) : setCount(count + 1)
	}

	const price = 250.00.toFixed(2);
	const discount = 50;

	function calculateDiscount(originalPrice, discountValue) {
		const percent = (originalPrice / 100) * discountValue;
		return (originalPrice - percent).toFixed(2);
	}
  // LAYOUT PAYMENT
  // LAYOUT IMGS
  function handleClick(id) {
    const iFind = products.find((product => (product.id === id)))
    setImgs(iFind)
  }
  // LAYOUT IMGS
  // LAYOUT NAVBAR
  function handleClickCart() {
    if (cart != 0) {
      const add = cart + count;
      setCart(add);
      setCount(0)
      return;
    }
    setCart(count)
    setCount(0)
  }
  // LAYOUT NAVBAR

  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.page}>
        <LayoutNavbar cartValue={cart == 0 ? '' : cart} />
        <LayoutImgs>
          <MainImg mainImgUrl={imgs.mainImg} />
          <div className={styles.gallery}>
            {products.map((product => (<GalleryImgs key={product.id} onClick={() => handleClick(product.id)} isTrue={product.id == imgs.id} imgGalleryImg={product.galleryImg} />)))}
          </div>
        </LayoutImgs>
        <LayoutPayment>
          <Product costDiscount={calculateDiscount(price, discount)} discount={discount} originalPrice={price}>
            <Counter count={count} onClick={handleCount} />
            <Button onClick={handleClickCart}>
              <IconCart fill={'#181818'} />
              {'Add to cart'}
            </Button>
          </Product>
        </LayoutPayment>
      </div>
    </div>
    </>
  )
}

export default App
