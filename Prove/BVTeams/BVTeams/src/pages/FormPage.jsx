import { useEffect, useState } from 'react';
import styles from './formPage.module.css';
import { NavLink } from 'react-router-dom';

function FormPage() {

  const [inputValue, setInputValue] = useState({ id: crypto.randomUUID(), player: '', rate: '' });
  const [storage, setStorage] = useState(() => {
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  function handleChange(e) {
    const { id, value, type } = e.target;

    if (type === 'text') {
      setInputValue(prevState => ({ ...prevState, player: value }));
    } else if (type === 'radio') {
      setInputValue(prevState => ({ ...prevState, rate: value }));
    }
  }

  function handleClick() {
    if (inputValue.player && inputValue.rate) {
      setStorage(prevState => [...prevState, inputValue]);
      setInputValue({ id: crypto.randomUUID(), player: '', rate: '' }); // Clear the input fields
    }
  }

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(storage));
  }, [storage]);

  const isDisabled = inputValue.player === '' || inputValue.rate === '';

  return (
    <div className={styles.containerForm}>
      <NavLink className={styles.backToHome} to='/'>
        <img src="/img/beach-volleyball_7779940.png" alt="Icona Home" />
        <span>BACK TO HOME</span>
      </NavLink>
      <div className={styles.containerInput}>
        <div className={styles.containerInputText}>
          <input 
            onChange={handleChange} 
            id='name' 
            type="text" 
            value={inputValue.player}
          />
          <label className={inputValue.player ? styles.positionLabel : styles.label} htmlFor="name">Player's Name</label>
        </div>
        <div className={styles.rate}>Rate</div>
        <div className={styles.rating}>
          <input 
            onChange={handleChange} 
            type="radio" 
            id="star-1" 
            name="star-radio" 
            value="5" 
            checked={inputValue.rate === "5"} 
          />
          <label htmlFor="star-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
            </svg>
          </label>
          <input 
            onChange={handleChange} 
            type="radio" 
            id="star-2" 
            name="star-radio" 
            value="4" 
            checked={inputValue.rate === "4"} 
          />
          <label htmlFor="star-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
            </svg>
          </label>
          <input 
            onChange={handleChange} 
            type="radio" 
            id="star-3" 
            name="star-radio" 
            value="3" 
            checked={inputValue.rate === "3"} 
          />
          <label htmlFor="star-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
            </svg>
          </label>
          <input 
            onChange={handleChange} 
            type="radio" 
            id="star-4" 
            name="star-radio" 
            value="2" 
            checked={inputValue.rate === "2"} 
          />
          <label htmlFor="star-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
            </svg>
          </label>
          <input 
            onChange={handleChange} 
            type="radio" 
            id="star-5" 
            name="star-radio" 
            value="1" 
            checked={inputValue.rate === "1"} 
          />
          <label htmlFor="star-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
            </svg>
          </label>
        </div>
        <button 
          onClick={handleClick} 
          className={styles.buttonSend} 
          disabled={isDisabled}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default FormPage;
