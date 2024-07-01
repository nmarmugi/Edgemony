import './Main.css'
import Card from '../../atoms/Card/Card'

function Main({posts}) {
	return (
	<>
		<h1>CARDS</h1>
		<div className="container-cards">
			{posts.map(item => <Card key={`item-${item.id}`} image={item.thumbnail} title={item.title} price={item.price}/>)}
		</div>
	</>
	)
}


export default Main