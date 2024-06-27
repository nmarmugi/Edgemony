import React, { useState } from 'react';
import './Keyboard.css'
import Button from '../Button/Button'
import Display from '../Display/Display';

function Keyboard() {
    const arrayValue = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "Reset", 0, ".", "="];
    const [displayValue, setDisplayValue] = useState('');

	const handleButtonClick = (value) => {
		if (displayValue.length >= 19) {
			return;
		}
        switch (value) {
            case 'AC':
                setDisplayValue('');
                break;
            case '+/-':
                setDisplayValue(prevValue => {
                    if (prevValue.charAt(0) === '-') {
                        return prevValue.substring(1);
                    } else {
                        return '-' + prevValue;
                    }
                });
                break;
            case 'Reset':
                setDisplayValue('');
                break;
            case '=':
                let result = displayValue.replace(/X/g, '*');
                result = eval(result);
                setDisplayValue(String(result));
                break;
            default:
                if (typeof value === 'number' || value === '.' || value === '+' || value === '-' || value === 'X' || value === '/' || value === '%') {
                    setDisplayValue(prevValue => prevValue + String(value));
                }
                break;
        }
    };

    return (
        <>
            <Display value={displayValue} />
            <div className="keyboard">
                {arrayValue.map(value => (<Button key={value} children={value} onClick={() => handleButtonClick(value)} />))}
            </div>
        </>
    );
}

export default Keyboard