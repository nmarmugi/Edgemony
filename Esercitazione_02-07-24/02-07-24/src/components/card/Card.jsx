import { useRef, useEffect } from 'react';
import styles from './card.module.css';

function Card({ posts }) {
	const h1Ref = useRef(null);
	const pRef = useRef(null);

	let randomIndex = Math.floor(Math.random() * posts.length);

	useEffect(() => {
        h1Ref.current.textContent = `ADVICE #${posts[randomIndex].id}`;
        pRef.current.textContent = `"${posts[randomIndex].advice}"`;
    }, []);

	function getRandomAdvice() {
		let oldRandomIndex = randomIndex;
		while (oldRandomIndex === randomIndex) {
			randomIndex = Math.floor(Math.random() * posts.length);
		}
		h1Ref.current.textContent = `ADVICE #${posts[randomIndex].id}`;
		pRef.current.textContent = `"${posts[randomIndex].advice}"`;
	}

    return (
        <div className={styles.card}>
            <h1 ref={h1Ref}>ADVICE #{posts[randomIndex].id}</h1>
            <p ref={pRef}>"{posts[randomIndex].advice}"</p>
            <img src="./img/pattern-divider-desktop.svg" alt="Immagine divisoria" />
            <button onClick={getRandomAdvice}>
                <img src="./img/icon-dice.svg" alt="Immagine bottone" />
            </button>
        </div>
    )
}

export default Card;

