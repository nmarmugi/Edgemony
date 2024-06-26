import './header.css'

function Header() {
	return (
		<header>
			<div className="logo">LOGO</div>
			<CreateMenu />
		</header>
	)
}

function CreateMenu() {
	const linksMenu = [
		{
			label: 'Link 1',
			href: 'https://google.it'
		},
		{
			label: 'Link 2',
			href: 'https://jsonplaceholder.typicode.com/posts'
		}
	];
	return (
		<nav className="links">
			{linksMenu.map(link => (<CreateLinks key={link.label} className='link' href={link.href}>{link.label}</CreateLinks>))}
		</nav>
	)
}

function CreateLinks(props) {
	const {children, ...attrs} = props;
	return (
		<a {...attrs}>{children}</a>
	)
}

export {Header}