'use client';
import { useEffect, useState } from "react";
import { Card, ICard } from "@/components/Card/Card";
import styles from './layoutContainPokemon.module.css';
import Loading from "@/components/Loading/Loading";

export default function LayoutContainPokemon() {
    const [data, setData] = useState<ICard[]>([]);
	const [noPokemon, setNoPokemon] = useState<boolean>(false)
	const [inputName, setInputName] = useState<string>('')
	const [inputId, setInputId] = useState<string>('')
	const [select, setSelect] = useState<string>('name')
    const [loading, setLoading] = useState<boolean>(true);

    async function getPokemon() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=649');
        const data = await res.json();
        setData(data.results);
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelect(e.target.value);
    }

	useEffect(() => {
		setNoPokemon(false)
		getPokemon()
    }, [select]);

	function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
		setInputName(e.target.value)
	}

	useEffect(() => {
		if (inputName === '') {
			getPokemon()
			setNoPokemon(false)
		} else {
			if (!/^[A-Za-z]+$/.test(inputName)) {
				setNoPokemon(true)
			}
			const filteredArray = data.filter(pokemon => pokemon.name.includes(inputName.toLowerCase()))
			if (filteredArray.length === 0) {
				setNoPokemon(true)
			}
			setData(filteredArray)
		}
	}, [inputName])

	function handleChangeId(e: React.ChangeEvent<HTMLInputElement>) {
		setInputId(e.target.value)
	}

	useEffect(() => {
		if (inputId === '') {
			getPokemon()
			setNoPokemon(false)
		} else {
			if (Number(inputId) > 649 || !/^\d+$/.test(inputId)) {
				setNoPokemon(true)
			}
			const filteredArray = data.filter(pokemon => pokemon.url.split('/')[6].includes(inputId))
			setData(filteredArray)
		}
	}, [inputId])

    useEffect(() => {
		setTimeout(() => {
			getPokemon();
			setLoading(false)
		}, 2000)
    }, []);

    if (loading) return <Loading />;

    return (
		<>
		<div className={styles.containerInput}>
			{select === 'name' && <input placeholder="Search for name. . ." onChange={handleChangeName} className="mb-5 rounded-md" type="text"></input>}
			{select !== 'name' && <input placeholder="Search for id. . ." onChange={handleChangeId} className="mb-5 rounded-md" type="text"></input>}
			<select  onChange={handleSelectChange} >
				<option value="name">Name</option>
				<option value="id">Id</option>
			</select>
		</div>
        <div className={styles.containerCards}>
			{noPokemon && <p className="font-bold text-3xl">No pokemon found...</p>}
            {!noPokemon && data.map((pokemon) => (
                <Card key={pokemon.url} url={pokemon.url.split('/')[6]} fullName={pokemon.name} name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.split('-')[0].slice(1)} />
            ))}
        </div>
		</>
    );
}
