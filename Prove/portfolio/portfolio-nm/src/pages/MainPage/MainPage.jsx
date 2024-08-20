import { useState, useEffect } from 'react';
import styles from './mainPage.module.css';
import Button from '../../components/Button/Button'

const arrayPresentation = [
	'I', 'I\'', 'I\'m', 'I\'m ', 'I\'m N', 'I\'m Ni', 'I\'m Nic',
	'I\'m Nico', 'I\'m Nicol', 'I\'m Nicola', 'I\'m Nicola ',
	'I\'m Nicola M', 'I\'m Nicola Ma', 'I\'m Nicola Mar',
	'I\'m Nicola Marm', 'I\'m Nicola Marmu', 'I\'m Nicola Marmug',
	'I\'m Nicola Marmugi'
];

export default function MainPage() {
	const [presentation, setPresentation] = useState('');
	const [index, setIndex] = useState(0)
	const [bar, setBar] = useState(false)

	useEffect(() => {
		const blinkInterval = setInterval(() => {
			setBar(prevBar => !prevBar);
		}, 500);

		return () => clearInterval(blinkInterval);
	}, []);

	useEffect(() => {

		const interval = setInterval(() => {
			setIndex((prevIndex) => {
				if (prevIndex < arrayPresentation.length - 1) {
					return prevIndex + 1;
				} else {
					clearInterval(interval);
					return prevIndex;
				}
			});
		}, 250);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		setPresentation(arrayPresentation[index])
	}, [index])

	return (
		<div id='home' className={styles.containerPresentation}>
			<div className={styles.presentation}>
				<Button>Welcome to my Portfolio</Button>
				<h1>Hi! <span className={styles.nameSpan}>{presentation}</span><span className={bar ? styles.barNone : styles.bar}>|</span></h1>
				<p>
					Frontend Developer with one year of intensive training, which began at School 42 in Florence and was completed at Edgemony's Bootcamp.
					With a previous ten years of experience as a Chef in fine dining, I have honed essential skills such as time management, accuracy and discipline.
					I am strongly team-oriented, with excellent communication and organizational skills.
				</p>
			</div>
			<div className={styles.imgPresentation}>
				<img src="/img/astronaut-sitting-planet-waving-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style.png" alt="Immagine astronauta" />
			</div>
		</div>
	)
}