const link = [
	{
		path: '/',
		id: 'HOME'
	},
	{
		path: 'cart',
		id: 'CART'
	}
]

function Navbar() {
	return (
		<nav className="w-full fixed top-0 flex justify-between bg-red-300 p-4">
			<h1 className="font-bold">LOGO</h1>
			<div className="flex gap-5">
				{link.map((element => (<a key={element.id} href={element.path}>{element.id}</a>)))}
			</div>
		</nav>
	)
}

export default Navbar