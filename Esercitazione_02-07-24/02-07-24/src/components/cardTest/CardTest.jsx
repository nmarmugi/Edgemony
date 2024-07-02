import React, { useRef, useEffect } from 'react';
import styles from './cardTest.module.css';

function Card() {
    const cardRef = useRef(null);
    
    useEffect(() => {

        const computedStyles = window.getComputedStyle(cardRef.current);

        console.log('border:', computedStyles.border);
        console.log('background-color:', computedStyles.backgroundColor);
		
    }, []);

    return (
        <div ref={cardRef} className={styles.card}>
            <div className='ciao'>
                <h1>Hello World</h1>
            </div>
        </div>
    );
}

export default Card;
