import './Counter.css'
import Button from '../Button/Button'
import {useState} from'react'

function Counter() {
	const [count, setCount] = useState(0)
	function onClickPlusAndMinus(event) {
		if (event.target.parentNode.classList.value.includes('buttonPlus')) {
			setCount(count + 1)
        } else {
			setCount(count - 1)
			if (count <= 0) {
                setCount(0)
            }
		}
	}
	function onClickRandom() {
		setCount(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
	}
	return <>
    <div className='counter'>
		<Button buttonClass='button buttonPlus' spanClass='base plus' onClick={(event) => onClickPlusAndMinus(event)}/>
		{count}
		<Button buttonClass='button buttonMinus' spanClass='base minus' onClick={(event) => onClickPlusAndMinus(event)}/>
	</div>
	<Button buttonClass='button' spanClass='base random' onClick={(event) => onClickRandom(event)}/>
	</>
}

export default Counter