import {NavLink} from 'react-router-dom'
import { ArticlesContext } from '../../providers/ProviderContex'
import { useContext } from 'react'

const links = [
	{
		path: '/',
		name: 'HOME'
	},
	{
		path: 'cart',
		name: 'CART'
	}
]

function Navbar() {
	const {articles} = useContext(ArticlesContext)

	return (
		<div className='fixed top-0 bg-slate-400 w-full p-3 flex justify-between'>
			<h1 className='font-bold'>ARTICLES SHOP</h1>
			<div className='flex gap-3'>
				{
					links.map((link => <NavLink className={({isActive}) => isActive ? 'font-bold' : ''} key={link.name} to={link.path}>{link.name}</NavLink>))
				}
				<span className={articles.length > 0 && 'bg-slate-300 w-5 h-5 flex justify-center items-center rounded-full font-bold'}>{articles.length > 0 && articles.length}</span>
			</div>
		</div>
	)
}

export default Navbar