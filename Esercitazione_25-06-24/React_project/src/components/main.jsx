function Main() {
	return (
		<section>
			<CreateMain />
			<CreateSidebar />
		</section>
	)
}

function CreateMain() {
	return (
	<main>
		<CreateContentMain />
	</main>
	)
}

function CreateContentMain() {
	return (
		<>
			<div className="card">
				<h3 className="title">TITOLO 1</h3>
				<p className="aboutTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque, nobis officia nemo laudantium, sequi culpa quae eveniet consequuntur exercitationem voluptatem id eum, esse quia? Voluptate provident aspernatur ad explicabo?</p>
				<span>ID autore: 1</span>
			</div>
			<div className="card">
				<h3 className="title">TITOLO 2</h3>
				<p className="aboutTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto at dolor, itaque cum inventore enim quaerat iste atque facere impedit nobis eaque? Repellat, eaque? Fugiat deserunt natus id perferendis.</p>
				<span>ID autore: 2</span>
			</div>
			<div className="card">
				<h3 className="title">TITOLO 3</h3>
				<p className="aboutTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto at dolor, itaque cum inventore enim quaerat iste atque facere impedit nobis eaque? Repellat, eaque? Fugiat deserunt natus id perferendis.</p>
				<span>ID autore: 3</span>
			</div>
			<div className="card">
				<h3 className="title">TITOLO 4</h3>
				<p className="aboutTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto at dolor, itaque cum inventore enim quaerat iste atque facere impedit nobis eaque? Repellat, eaque? Fugiat deserunt natus id perferendis.</p>
				<span>ID autore: 4</span>
			</div>
			<div className="card">
				<h3 className="title">TITOLO 5</h3>
				<p className="aboutTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto at dolor, itaque cum inventore enim quaerat iste atque facere impedit nobis eaque? Repellat, eaque? Fugiat deserunt natus id perferendis.</p>
				<span>ID autore: 5</span>
			</div>
		</>
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

export default Main;