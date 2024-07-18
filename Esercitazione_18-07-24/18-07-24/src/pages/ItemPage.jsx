import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";

function ItemPage() {
	const {id} = useParams()
	const [pageItem, setPageItem] = useState(null)
	const [storage, setStorage] = useState([]);
	const [prevStorage, setPrevStorage] = useState(null);

	async function itemFetch(idItem) {
		const res = await fetch(`https://api.escuelajs.co/api/v1/products/${idItem}`)
		const data = await res.json()
		setPageItem(data)
	}

	useEffect(() => {
		itemFetch(id);
		const getCartFromStorage = JSON.parse(localStorage.getItem('cart'));
		if (getCartFromStorage) {
			setStorage(getCartFromStorage);
		}
	}, []);

	function handleClick() {
		setStorage((prevState) => [...prevState, pageItem]);
	}
	
	useEffect(() => {
		setPrevStorage(storage);
	}, [storage]);
	
	useEffect(() => {
		if (prevStorage !== null) {
			localStorage.setItem('cart', JSON.stringify(prevStorage));
		}
	}, [prevStorage]);

	return (
		pageItem && (
			<Card
            key={self.crypto.randomUUID()}
            cardId={pageItem.id}
            cardImg={pageItem.images[0].replace(/[\[\]"]/g, '')}
            cardTitle={pageItem.title}
			descriptionCard={pageItem.description}
            cardPrice={pageItem.price}
            cardCategory={pageItem.category.name}
            buttonMessage={'ADD TO CART'}
			onClick={handleClick}
			/>
		)
	)
}

export default ItemPage