'use client';
import Loading from "@/components/Loading/Loading";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface IPokemonName {
	params: {
		name: string;
	}
}

export interface ISinglePokemon  {
	abilities: Ability[]
	base_experience: number
	cries: Cries
	forms: Form[]
	game_indices: Index[]
	height: number
	held_items: HeldItem[]
	id: number
	is_default: boolean
	location_area_encounters: string
	moves: Mfe[]
	name: string
	order: number
	past_abilities: any[]
	past_types: any[]
	species: Species
	sprites: Sprites
	stats: Stat[]
	types: Type[]
	weight: number
}

interface Ability {
	ability: Ability2
	is_hidden: boolean
	slot: number
}

interface Ability2 {
	name: string
	url: string
}

interface Cries {
	latest: string
	legacy: string
}

interface Form {
	name: string
	url: string
}

interface Index {
	game_index: number
	version: Version
}

interface Version {
	name: string
	url: string
}

interface HeldItem {
	item: Item
	version_details: VersionDetail[]
}

interface Item {
	name: string
	url: string
}

interface VersionDetail {
	rarity: number
	version: Version2
}

interface Version2 {
	name: string
	url: string
}

interface Mfe {
	move: Move
	version_group_details: VersionGroupDetail[]
}

interface Move {
	name: string
	url: string
}

interface VersionGroupDetail {
	level_learned_at: number
	move_learn_method: MoveLearnMethod
	version_group: VersionGroup
}

interface MoveLearnMethod {
	name: string
	url: string
}

interface VersionGroup {
	name: string
	url: string
}

interface Species {
	name: string
	url: string
}

interface Sprites {
	back_default: string
	back_female: any
	back_shiny: string
	back_shiny_female: any
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
	other: Other
	versions: Versions
}

interface Other {
	dream_world: DreamWorld
	home: Home
	"official-artwork": OfficialArtwork
	showdown: Showdown
}

interface DreamWorld {
	front_default: string
	front_female: any
}

interface Home {
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface OfficialArtwork {
	front_default: string
	front_shiny: string
}

interface Showdown {
	back_default: string
	back_female: any
	back_shiny: string
	back_shiny_female: any
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface Versions {
	"generation-i": GenerationI
	"generation-ii": GenerationIi
	"generation-iii": GenerationIii
	"generation-iv": GenerationIv
	"generation-v": GenerationV
	"generation-vi": GenerationVi
	"generation-vii": GenerationVii
	"generation-viii": GenerationViii
}

interface GenerationI {
	"red-blue": RedBlue
	yellow: Yellow
}

interface RedBlue {
	back_default: string
	back_gray: string
	back_transparent: string
	front_default: string
	front_gray: string
	front_transparent: string
}

interface Yellow {
	back_default: string
	back_gray: string
	back_transparent: string
	front_default: string
	front_gray: string
	front_transparent: string
}

interface GenerationIi {
	crystal: Crystal
	gold: Gold
	silver: Silver
}

interface Crystal {
	back_default: string
	back_shiny: string
	back_shiny_transparent: string
	back_transparent: string
	front_default: string
	front_shiny: string
	front_shiny_transparent: string
	front_transparent: string
}

interface Gold {
	back_default: string
	back_shiny: string
	front_default: string
	front_shiny: string
	front_transparent: string
}

interface Silver {
	back_default: string
	back_shiny: string
	front_default: string
	front_shiny: string
	front_transparent: string
}

interface GenerationIii {
	emerald: Emerald
	"firered-leafgreen": FireredLeafgreen
	"ruby-sapphire": RubySapphire
}

interface Emerald {
	front_default: string
	front_shiny: string
}

interface FireredLeafgreen {
	back_default: string
	back_shiny: string
	front_default: string
	front_shiny: string
}

interface RubySapphire {
	back_default: string
	back_shiny: string
	front_default: string
	front_shiny: string
}

interface GenerationIv {
	"diamond-pearl": DiamondPearl
	"heartgold-soulsilver": HeartgoldSoulsilver
	platinum: Platinum
}

interface DiamondPearl {
	back_default: string
	back_female: any
	back_shiny: string
	back_shiny_female: any
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface HeartgoldSoulsilver {
	back_default: string
	back_female: any
	back_shiny: string
	back_shiny_female: any
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface Platinum {
	back_default: string
	back_female: any
	back_shiny: string
	back_shiny_female: any
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface GenerationV {
	"black-white": BlackWhite
}

interface BlackWhite {
	animated: Animated
	back_default: string
	back_female: any
	back_shiny: string
	back_shiny_female: any
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface Animated {
	back_default: string
	back_female: any
	back_shiny: string
	back_shiny_female: any
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface GenerationVi {
	"omegaruby-alphasapphire": OmegarubyAlphasapphire
	"x-y": XY
}

interface OmegarubyAlphasapphire {
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface XY {
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface GenerationVii {
	icons: Icons
	"ultra-sun-ultra-moon": UltraSunUltraMoon
}

interface Icons {
	front_default: string
	front_female: any
}

interface UltraSunUltraMoon {
	front_default: string
	front_female: any
	front_shiny: string
	front_shiny_female: any
}

interface GenerationViii {
	icons: Icons2
}

interface Icons2 {
	front_default: string
	front_female: any
}

interface Stat {
	base_stat: number
	effort: number
	stat: Stat2
}

interface Stat2 {
	name: string
	url: string
}

interface Type {
	slot: number
	type: Type2
}

interface Type2 {
	name: string
	url: string
}


export default function Pokemon({params}: IPokemonName) {
	const {name} = params;
	const [data, setData] = useState<ISinglePokemon | null>(null)
	const [dataDescription, setDataDescription] = useState<string | ''>('')
	const [image, setImage] = useState<boolean>(true)
	const [description, setDescription] = useState<boolean>(false)
	const audioRef = useRef<HTMLAudioElement>(null);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	}

	async function getPokemonName(name: string) {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		const data = await res.json()
		setData(data)
		const description = data.species.url
		const resDescription = await fetch(description)
		const dataDescription = await resDescription.json()
		setDataDescription(dataDescription.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ""))
	}

	useEffect(() => {
		if (data && audioRef.current) {
			audioRef.current.play();
		}
	}, [data]);

	useEffect(() => {
		getPokemonName(name)
	}, [name])

	function handleChangeImgGo() {
		setImage(false)
	}

	function handleChangeImgDown() {
		setImage(true)
	}

	function handleDescription() {
		setDescription(true)
	}

	function handleNoDescription() {
		setDescription(false)
	}

	return (
		<div className="max-w-[768px] w-full h-[812px] bg-[#E85463] relative flex flex-col items-center pb-12">
			{!data && <Loading />}
			{data &&
			<>
			{data.cries.latest && <audio ref={audioRef} src={data.cries.latest}></audio>}
			<Link className="absolute top-3 left-3 flex items-center gap-2 text-white font-semibold" href={'/'}><Image width={30} height={30} src='/img/button_2489325.svg' alt="Back to home"  />Home</Link>
			<div className="absolute top-3 right-3 flex items-center gap-2">
				<button onClick={handleNoDescription} className={!description ? "bg-white text-[#E85463] p-1 rounded cursor-pointer text-base font-bold" : "bg-white text-[#E85463] p-1 rounded cursor-pointer text-xs"}>Versions in game</button>
				<button onClick={handleDescription} className={description ? "bg-white text-[#E85463] p-1 rounded cursor-pointer text-base font-bold" : "bg-white text-[#E85463] p-1 rounded cursor-pointer text-xs"}>Description</button>
			</div>
			<div className="w-11/12 h-60 min-h-60 mt-12 bg-white rounded-3xl relative flex flex-col items-center">
				<h2 className="font-bold text-xl mt-4">{data.name.charAt(0).toUpperCase() + data.name.split('-')[0].slice(1)} #{data.order}</h2>
				{!image && <span className="text-xs font-semibold">Shiny</span>}
				<span className="bg-black p-1 rounded-md font-semibold text-white">
					{data.types.map(pokemon => pokemon.type.name.charAt(0).toUpperCase() + pokemon.type.name.slice(1)).join('/')}
				</span>
				<div className="absolute -bottom-20 w-full h-full flex items-center justify-center gap-3">
					<span onClick={handleChangeImgDown} className="font-bold text-3xl cursor-pointer">&lt;</span>
					{image && data.sprites.other['official-artwork'].front_default && <img onClick={playAudio} className="w-48 cursor-pointer" src={`${data.sprites.other['official-artwork'].front_default}`} alt="Pokemon" />}
					{!image && data.sprites.other['official-artwork'].front_shiny && <img onClick={playAudio} className="w-48 cursor-pointer" src={`${data.sprites.other['official-artwork'].front_shiny}`} alt="Pokemon" />}
					<span onClick={handleChangeImgGo} className="font-bold text-3xl cursor-pointer">&gt;</span>
				</div>
				<div className="w-11/12 flex justify-center gap-5 absolute -bottom-20">
					<span className="font-semibold text-white">Weight: {data.weight}</span>
					<span className="font-semibold text-white">Height: {data.height}</span>
				</div>
			</div>
			<div className="w-11/12 mt-24 flex flex-col items-center bg-white rounded-3xl p-3 relative">
				{!description && (
					<>
					<h2 className="font-bold">Versions in game</h2>
					{data.sprites.versions['generation-viii'].icons.front_default && <img className="w-20 h-20" src={data.sprites.versions['generation-viii'].icons.front_default} alt="Pokemon" />}
					<div className="w-full flex flex-wrap justify-around gap-2 p-3">
						{data.sprites.versions['generation-i']['red-blue'].front_default && <img title="Red-Blue" className="w-20 h-20 border-2 border-black rounded-md p-2 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl" src={data.sprites.versions['generation-i']['red-blue'].front_default} alt="Pokemon" />}
						{data.sprites.versions['generation-ii'].crystal.front_default && <img title="Crystal" className="w-20 h-20 border-2 border-black rounded-md p-2 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl" src={data.sprites.versions['generation-ii'].crystal.front_default} alt="Pokemon" />}
						{data.sprites.versions['generation-iii'].emerald.front_default && <img title="Emerald" className="w-20 h-20 border-2 border-black rounded-md p-2 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl" src={data.sprites.versions['generation-iii'].emerald.front_default} alt="Pokemon" />}
						{data.sprites.versions['generation-iv']['diamond-pearl'].front_default && <img title="Diamond-Pearl" className="w-20 h-20 border-2 border-black rounded-md p-2 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl" src={data.sprites.versions['generation-iv']['diamond-pearl'].front_default} alt="Pokemon" />}
						{data.sprites.versions['generation-v']['black-white'].front_default && <img title="Black-White" className="w-20 h-20 border-2 border-black rounded-md p-2 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl" src={data.sprites.versions['generation-v']['black-white'].front_default} alt="Pokemon" />}
						{data.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default && <img title="Omegaruby-Alphasapphire" className="w-20 h-20 border-2 border-black rounded-md p-2 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl" src={data.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default} alt="Pokemon" />}
					</div>
					</>
				)}
				{description && (
					<>
					<h2 className="font-bold mb-2">Description</h2>
					<p className="font-bold mb-1">
						{dataDescription}
					</p>
					<Link className="border-2 p-1 rounded-lg bg-black text-white mb-2" href={`https://wiki.pokemoncentral.it/${name.charAt(0).toUpperCase() + name.slice(1)}`} target="_blank">READ MORE</Link>
					<Image width={140} height={140} src='/img/game_14079557.png' alt="Pokemon center" />
					</>
				)}
			</div>
			</>
			}
		</div>
	)
}
