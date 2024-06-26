import './footer.css'

function Footer() {
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
			label: "Services",
			children: [
				{ label: "Service 1", href: "#" },
				{ label: "Service 2", href: "#" },
				{ label: "Service 3", href: "#" },
			],
		},
		{
			label: "Contact us",
			children: [
				{ label: "Email", href: "#" },
				{ label: "Phone", href: "#" },
				{ label: "Location", href: "#" },
			],
		}
	];
	return (
		<footer>
			<div className="footer-logo">LOGO</div>
			<CreateMenu options={menuItems}/>
		</footer>
	)
}

function CreateMenu({options = []}) {
	return (
	<ul className="main-menu">
		{options.map(menuItems => 
	(<li key={menuItems.label} className="menu">{menuItems.label}
		<CreateSubMenu options={menuItems.children} />
	</li>))}
	</ul>
	)
}

function CreateSubMenu({options = []}) {
	return (
	<ul>
		{options.map(children => (<li key={children.label} className="subMenu"><a href={children.href}>{children.label}</a></li>))}
	</ul>
	)
}

export { Footer };