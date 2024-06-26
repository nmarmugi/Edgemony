import './main.css'
import posts from '../../assets/data/data.json'

function CreateSection() {
	return (
	<section>
		<CreateMain  posts={posts}/>
		<CreateSidebar />
	</section>
	)
}

function CreateMain({ posts }) {
	return (
	<main>
		{posts.map(article => (
			<CreateContentMain key={article.id} childrenH3={article.title} childrenP={article.body} childrenSpan={article.id} />
		))}
	</main>
	)
}

function CreateContentMain({ childrenH3, childrenP, childrenSpan }) {
	return (
		<div className="card">
			<h3 className='title'>{childrenH3}</h3>
			<p className='aboutTitle'>{childrenP}</p>
			<span>ID autore: {childrenSpan}</span>
		</div>
	)
}

function CreateSidebar() {
	return (
	<aside>
		<ul>
			<li>Autori</li>
			<li>Categorie</li>
			<li>I più letti</li>
			<li>I più venduti</li>
			<li>I più recenti</li>
			<li>I più antichi</li>
		</ul>
	</aside>
	)
}

export { CreateSection }