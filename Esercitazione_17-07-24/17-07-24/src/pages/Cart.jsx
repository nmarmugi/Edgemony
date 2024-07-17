import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

function Cart() {
    const [cart, setCart] = useState([]);
	const [prevCart, setPrevCart] = useState(null);

	useEffect(() => {
		const getCart = JSON.parse(localStorage.getItem('cart'))
		if (getCart) {
			setCart(getCart)
		}
	}, [])

	function handleDelete(id) {
		let productRemoved = false;
		const updatedCart = cart.filter(product => {
			if (product.id === id && !productRemoved) {
				productRemoved = true;
				return false;
			}
			return true;
		});
		setCart(updatedCart)
	}

	useEffect(() => {
		setPrevCart(cart);
	}, [cart]);

	useEffect(() => {
		if (prevCart !== null) {
			localStorage.setItem('cart', JSON.stringify(prevCart));
		}
	}, [prevCart]);

    return (
        <div className="w-full flex flex-wrap gap-5 mt-16 justify-around">
            {cart.length === 0 ? <h2>CARRELLO VUOTO</h2> : (
                cart.map(product => (
                    <Card key={self.crypto.randomUUID()}
                        cardId={product.id}
                        cardImg={product.images[0].replace(/[\[\]"]/g, '')}
                        cardTitle={product.title}
                        cardPrice={product.price}
                        cardCategory={product.category.name}
                        buttonMessage={'DELETE TO CART'}
                        onClick={() => handleDelete(product.id)} />
                ))
            )}
        </div>
    );
}

export default Cart;
