function createHeader() {
	const menu = createMenu();
	return `
	<header>
		<div class="logo">LOGO</div>
		${menu}
	</header>
	`;
}

function createMenu() {
	const linksMenu = [
		{
			label: 'Link 1',
			href: 'https://google.it'
		},
		{
			label: 'Link 2',
			href: 'https://google.it'
		}
	];
	const links = createLinksMenu(linksMenu);
	return `
	<nav class="links">
		${links}
	</nav>
	`;
}

function createLinksMenu(links = []) {
	return links.map(link => `
	<a class="link" href="${link.href}">${link.label}</a>
	`).join('');
}

export {createHeader}