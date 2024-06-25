function Header() {

	return (
		<header>
			<div className="logo">LOGO</div>
			<CreateMenu />
		</header>
	)
}

function CreateMenu() {
	return (
		<nav className="links">
			<LinksMenu />
		</nav>
	)
}

function LinksMenu() {
	return (
	<>
		<a className="link" href="#">LINK 1</a>
		<a className="link" href="#">LINK 2</a>
	</>
	)
}

export default Header;