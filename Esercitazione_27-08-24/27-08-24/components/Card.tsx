interface ICard {
	title: string;
	description: string;
	id: number;
}

export function Card({title, description, id}: ICard) {
	return (
		<div style={{color: "white", border: '2px solid white', borderRadius: '12px', padding: '10px', textAlign: 'center'}}>
			<h1>{title}</h1>
			<p>{description}</p>
			<span>id: {id}</span>
		</div>
	)
}