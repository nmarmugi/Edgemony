import styles from './App.module.css'
import Select from './components/Select/Select'
import Option from './components/Option/Option.jsx'
import Letter from './components/Letter/Letter.jsx'
import { arrayCategory, arrayObj } from './assets/Data/data.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [selectValue, setSelectValue] = useState('');
  const [phrase, setPhrase] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setSelectValue(value)
  }

  useEffect(() => {
    if (!selectValue) return
    const filteredArray = arrayObj.filter((element => (element.category === selectValue)))
    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    const phraseSelected = filteredArray[randomIndex];
    const phraseInArray = phraseSelected.frase.split('').filter(carattere => /[a-zA-ZÀ-ÿ\s']/u.test(carattere))
    setPhrase(phraseInArray)
  }, [selectValue])

  function randomClass() {
    const arrayClass = [styles.opacity, ''];
	  const randomIndex = Math.floor(Math.random() * arrayClass.length);
    const classRandom = arrayClass[randomIndex]
    return classRandom
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <Select onChange={handleChange}>
          <option value="">Seleziona categoria</option>
          {arrayCategory.map((category => (<Option key={category} value={category} textOption={category} />)))}
        </Select>
        <h1>{selectValue}</h1>
        <div className={styles.containerPhrases}>
          <div className={styles.containerLetters}>{selectValue ? phrase.map((letter => (<Letter key={self.crypto.randomUUID()} classLetter={/[a-zA-Z]/.test(letter) ? randomClass() : ''} letter={letter} />))) : ''}</div>
        </div>
      </div>
    </>
  )
}

export default App
