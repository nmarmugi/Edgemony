import Image from "next/image"

export default function Loading() {
	return (
	<div className="w-full h-[812px] absolute top-0 left-0 z-10 flex flex-col gap-14 items-center justify-center bg-[#E85463]">
		<Image width={100} height={100} className="animate-rotate-infinite" src="/img/game_16033713.png" alt="Background Pokédex Loading" />
		<span className="font-extrabold text-2xl">Loading . . .</span>
	</div>
	)
}