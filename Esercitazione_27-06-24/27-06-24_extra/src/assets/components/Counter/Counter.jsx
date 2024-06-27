import React, { useState } from 'react';
import Button from '../Button/Button';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter">
            <h1>Contatore: {count}</h1>
            <Button onClick={increment}>Incrementa</Button>
            <Button onClick={decrement}>Decrementa</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
    );
}

export default Counter;
