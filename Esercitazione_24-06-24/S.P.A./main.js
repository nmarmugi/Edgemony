async function createSection() {
	const main = await createMain();
	const sidebar = createSidebar();
	return `
	<section>
		${main}
		${sidebar}
	</section>
	`
}

async function createMain() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const arrayObjs = await response.json();
	const arrayArticles = createContentMain(arrayObjs);
	return `
	<main>
		${arrayArticles}
	</main>
	`
}

function createContentMain(arrayObjJSON = []) {
	return arrayObjJSON.map(articles => `
		<div class="card">
			<h3 class="title">${articles.title}</h3>
			<p class="aboutTitle">${articles.body}</p>
			<span>ID autore: ${articles.id}</span>
		</div>
		`).join('');
}

function createSidebar() {
	return `
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
	`
}

export {createSection}