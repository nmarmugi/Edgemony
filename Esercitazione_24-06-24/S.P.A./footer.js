function createFooter() {
	const menuHTML = getMenuHTML();
	return `
	<footer>
		<div class="footer-logo">LOGO</div>
		${menuHTML}
	</footer>
	`;
}

//${menuHTML}

function getMenuHTML() {
	const menuItems = [
	{
		label: "About us",
		children: [
			{ label: "Company info", href: "#" },
			{ label: "Careers", href: "#" },
			{ label: "Altre cose", href: "#" },
		],
	},
	{
		label: "About us",
		children: [
			{ label: "Company info", href: "#" },
			{ label: "Careers", href: "#" },
			{ label: "Altre cose", href: "#" },
		],
	},
	{
		label: "About us",
		children: [
			{ label: "Company info", href: "#" },
			{ label: "Careers", href: "#" },
			{ label: "Altre cose belle", href: "#" },
		],
	}
	];
	return createMenu(menuItems);
}

function createMenu(options = []) {
	const menu = options.map(menuItems => `<li class="menu">${menuItems.label}
			${createSubMenu(menuItems.children)}
		</li>`).join('');
	return `
	<ul class="main-menu">
		${menu}
	</ul>
	`;
}

function createSubMenu(options = []) {
	const children = options.map(children => `<li class="subMenu"><a href="${children.href}">${children.label}</a></li>`).join('');
	return `
	<ul>
		${children}
	</ul>
	`;
}

export { createFooter };