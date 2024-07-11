import './App.css'
import Layout from './layout/Layout/Layout'
import Filter from './components/Filter/Filter'
import Card from './components/Card/Card'
import posts from './assets/data/data.json'
import { useEffect, useState } from 'react'

function App() {
  const [pokedex, setPokedex] = useState(posts);
  const [filter, setFilter] = useState({
    inputName: '',
    inputNumber: '',
    inputType: ''
  })

  function handleChange(e) {
    const {id, value} = e.target;
    setFilter(prevState => ({...prevState, [id]: value}))
  }
  
  useEffect(() => {
    const newArray = posts.filter(element => {return (element.name.toLocaleLowerCase().includes(filter.inputName))})
                                                        .filter(element => {return (element.num.toString().includes(filter.inputNumber))})
                                                          .filter(element => {return (element.variations[0].types.join('/').toLowerCase().includes(filter.inputType))})
    setPokedex(newArray)
  }, [filter])

  return (
    <>
      <Layout>
        <form>
          <div className='containerImgPokeball'>
            <img src="./images/pokeball.png" alt="Pokeball" />
          </div>
          <Filter onChange={handleChange} forInput={'inputName'} inputID={'inputName'} typeInput={'text'} textInput={'Search by name...'}>NAME</Filter>
          <Filter onChange={handleChange} forInput={'inputNumber'} inputID={'inputNumber'} typeInput={'number'} textInput={'Search by ID...'}>ID</Filter>
          <Filter onChange={handleChange} forInput={'inputType'} inputID={'inputType'} typeInput={'text'} textInput={'Search by type...'}>TYPE</Filter>
        </form>
        <div className='containerCards'>
          {pokedex.map(element => (
            <Card 
              key={element.num}
              imgCard={element.variations[0].image}
              titleCard={element.name}
              idCard={element.num}
              descriptionCard={element.variations[0].description}
              typeCard={element.variations[0].types.join('/')}
            />
          ))}
        </div>
        <a className='containerImgPokeballFixed' href='#'>
            <img src="./images/pokeball.png" alt="Pokeball" />
        </a>
      </Layout>
    </>
  );
}

export default App;
