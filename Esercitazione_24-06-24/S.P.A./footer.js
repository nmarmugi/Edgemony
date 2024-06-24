function createFooter() {
	const menuHTML = getMenuHTML();
	return `
	<footer class="footer">
		<div class="logo logoFooter">Logo</div>
		<nav class="nav">
			${menuHTML}
		</nav>
	</footer>
	`;
}

function getMenuHTML() {
	const menuItems = [
	{
		label: "About us",
		children: [
			{ label: "Company info" },
			{ label: "Careers" },
			{ label: "Altre cose" },
		],
	},
	{
		label: "About us",
		children: [
			{ label: "Company info" },
			{ label: "Careers" },
			{ label: "Altre cose" },
		],
	},
	];
	return `
	<ul class="menu">
		${menuItems.map((item) => getMenuItemHTML(item)).join("")}
	</ul>
	`;
}

function getMenuItemHTML(options) {
	const { label, href = "#", children = [] } = options;
	const subitemsHTML = children.map((item) => `<li class="item subitem">${item.label}</li>`).join("");
	const subMenuHTML = "<ul>" + subitemsHTML + "</ul>";
	return `
	<li class="item">
		<a href="${href}">${label}</a>
		${children.length > 0 ? subMenuHTML : ""}
	</li>
	`;
}

export { createFooter };