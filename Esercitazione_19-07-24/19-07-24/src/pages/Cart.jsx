import { useContext } from "react"
import { ArticlesContext, SetArticlesContext } from "../providers/ProviderContex"
import Card from "../components/Card/Card"

function Cart() {
	const {articles} = useContext(ArticlesContext)
	const {setArticles} = useContext(SetArticlesContext)

	async function DELETE(id) {
		const res = await fetch(`http://localhost:3000/cart/${id}`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json',
			}
		});
		const dataRes = await res.json()
		return dataRes;
	}

	async function getArticles() {
		const res = await fetch('http://localhost:3000/cart')
		const dataRes = await res.json()
		setArticles(dataRes)
	}

	async function handleDelete(id) {
		await DELETE(id)
		getArticles()
	}

	return (
		<div  className="p-16 mt-5 flex flex-wrap gap-7 justify-around w-full min-h-dvh items-center">
			{
				articles.length ? articles.map((article => <Card key={self.crypto.randomUUID()} cardId={article.id}
												cardTitle={article.title}
													cardDescription={article.description}
														cardPrice={article.price}
															onClick={() => handleDelete(article.id)}
																textButton={'DELETE TO CART'}/>))
																: <h2 className="font-bold">EMPTY CART</h2>
			}
		</div>
	)
}

export default Cart