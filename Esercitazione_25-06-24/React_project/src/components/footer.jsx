function Footer() {
	return (
	<footer>
		<div className="footer-logo">LOGO</div>
		<CreateMenu />
	</footer>
	);
}

function CreateMenu() {
	return (
	<ul className="main-menu">
		<li className="menu">ITEM 1
			<CreateSubMenu />
		</li>
		<li className="menu">ITEM 2
			<CreateSubMenu />
		</li>
		<li className="menu">ITEM 3
			<CreateSubMenu />
		</li>
		<li className="menu">ITEM 4
			<CreateSubMenu />
		</li>
	</ul>
	);
}

function CreateSubMenu() {
	return (
	<ul>
		<li className="subMenu"><a href="#">LINK 1</a></li>
		<li className="subMenu"><a href="#">LINK 2</a></li>
		<li className="subMenu"><a href="#">LINK 3</a></li>
		<li className="subMenu"><a href="#">LINK 4</a></li>
		<li className="subMenu"><a href="#">LINK 5</a></li>
	</ul>
	)
}

export default Footer;