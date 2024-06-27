import React, { useState } from 'react';
import './Keyboard.css'
import Button from '../Button/Button'
import Display from '../Display/Display';

function Keyboard() {
	const arrayValue = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4,5,6,"-", 1,2,3,"+", "Reset",0,".","="];
	const [displayValue, setDisplayValue] = useState('');

    const handleButtonClick = (value) => {
        setDisplayValue(value.toString());
    };
	return (
		<>
			<Display value={displayValue} />
			<div className="keyboard">
				{arrayValue.map(value => (<Button key={value} children={value} onClick={handleButtonClick}/>))}
			</div>
		</>
	)
}

export default Keyboard