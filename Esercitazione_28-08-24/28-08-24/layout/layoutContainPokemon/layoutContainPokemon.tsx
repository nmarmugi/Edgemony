'use client';
import { useEffect, useState } from "react"
import { Card, ICard } from "@/components/Card/Card";

export default function LayoutContainPokemon() {

	const [data, setData] = useState<ICard[] | []>([])

	async function getPokemon() {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
		const data = await res.json()
		setData(data.results)
	}

	useEffect(() => {
		getPokemon()
	}, [])

	return (
		<div>
			{data.map((pokemon) => <Card key={pokemon.url} url={pokemon.url.split('/')[6]} name={pokemon.name} />)}
		</div>
	)
}