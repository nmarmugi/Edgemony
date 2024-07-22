import styles from './App.module.css';
import Select from './components/Select/Select';
import Option from './components/Option/Option.jsx';
import Letter from './components/Letter/Letter.jsx';
import Alphabeth from './components/Alphabeth/Alphabeth.jsx';
import { arrayCategory, arrayObj, alphabeth } from './assets/Data/data.jsx';
import { useEffect, useState } from 'react';

const reset = [];

function App() {
  const [selectValue, setSelectValue] = useState('');
  const [phrase, setPhrase] = useState(reset);
  const [count, setCount] = useState(3);

  function handleChange(e) {
    const value = e.target.value;
    setSelectValue(value);
  }

  useEffect(() => {
    if (!selectValue) return;
    
    setPhrase(reset);
    
    const filteredArray = arrayObj.filter(element => element.category === selectValue);
    if (filteredArray.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    const phraseSelected = filteredArray[randomIndex];
    const phraseInArray = phraseSelected.frase.split('').filter(carattere => /[a-zA-ZÀ-ÿ\s']/u.test(carattere));
    
    const newPhrase = phraseInArray.map((element, index) => ({
      id: index,
      value: element,
      isClick: false,
      bgBlack: randomBoolean()
    }));
    
    setPhrase(newPhrase);
  }, [selectValue]);

  function randomBoolean() {
    const arrayClass = [true, false];
    const randomIndex = Math.floor(Math.random() * arrayClass.length);
    return arrayClass[randomIndex];
  }

  function handleClick(e) {
    const alphabetLetter = e.target.innerHTML.toLowerCase();

    const updateCount = phrase.find((element => (alphabetLetter === element.value.toLowerCase() && element.bgBlack === true)))
    if (!updateCount) {
      if (count === 0) return;
      setCount(count - 1)
    }

    const updatedPhrase = phrase.map(element => 
      element.value.toLowerCase() === alphabetLetter
      ? { ...element, isClick: true }
      : element
    );
    
    setPhrase(updatedPhrase);

  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.vite}>Vite: {count}</div>
        <Select onChange={handleChange}>
          <option value="">Seleziona categoria</option>
          {arrayCategory.map(category => (
            <Option key={category} value={category} textOption={category} />
          ))}
        </Select>
        <h1>{selectValue}</h1>
        <div className={styles.containerPhrases}>
          <div className={styles.containerLetters}>
            {selectValue ? phrase.map(letter => (
              <Letter 
                isClicked={letter.isClick} 
                key={letter.id}
                classLetter={/[a-zA-Z]/.test(letter.value) ? letter.bgBlack ? styles.opacity : '' : ''} 
                bgWhite={styles.noOpacity} 
                letter={letter.value} 
              />
            )) : ''}
          </div>
        </div>
        {selectValue && (
          <div className={styles.alphabeth}>
            {alphabeth.map(letter => (
              <Alphabeth onClick={handleClick} key={letter} letter={letter} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
