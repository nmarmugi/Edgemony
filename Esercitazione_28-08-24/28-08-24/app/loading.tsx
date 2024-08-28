import Image from "next/image"

export default function Loading() {
	return (
	<div className="w-full max-h-dvh h-dvh relative">
		<div className="absolute top-0 left-0 w-full h-full">
			<Image width={100} height={100} className="w-full h-full object-cover" src="/img/pokemonbackground.png" alt="Background Pokédex Loading" />
		</div>
	</div>
	)
}