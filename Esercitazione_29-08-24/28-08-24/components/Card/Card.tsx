import Image from 'next/image'
import Link from 'next/link';

export interface ICard {
	name: string;
	url: string;
	fullName: string;
}

export function Card({url, name, fullName}: ICard) {
	return (
		<Link href={`/${fullName}`}>
			<div className='shadow-lg w-32 h-32 flex flex-col items-center justify-center gap-2 rounded-md bg-custom-gradient'>
				<span className='font-semibold text-xs'>#{url}</span>
				<Image width={35} height={35} src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${url}.svg`} alt="Image Pokémon" />
				<span className='font-semibold tracking-widest '>{name}</span>
			</div>
		</Link>
	)
}