import Image from 'next/image'

export interface ICard {
	name: string;
	url: string;
}

export function Card({url, name}: ICard) {
	return (
		<div>
			<span>#{url}</span>
			<Image width={50} height={50} src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${url}.svg`} alt="Image Pokémon" />
			<span>{name}</span>
		</div>
	)
}