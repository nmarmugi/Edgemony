import './App.css'
import Layout from './layout/Layout/Layout'
import Filter from './components/Filter/Filter'
import Card from './components/Card/Card'
import posts from './assets/data/data.json'
import { useState } from 'react'

function App() {
  const [pokedex, setPokedex] = useState(posts);

  function handleFilter(e) {
    const filterValue = e.target.value.toLowerCase();

    if (!filterValue) {
      setPokedex(posts);
      return;
    }

    let filteredArray = [];

    if (e.target.id === 'inputName') {
      filteredArray = posts.filter(element => element.name.toLowerCase().includes(filterValue));
    } else if (e.target.id === 'inputNumber') {
      filteredArray = posts.filter(element => element.num.toString() === filterValue);
    } else if (e.target.id === 'inputType') {
      filteredArray = posts.filter(element => element.variations[0].types.join('/').toLowerCase().includes(filterValue));
    }

    setPokedex(filteredArray);
  }

  return (
    <>
      <Layout>
        <form>
          <div className='containerImgPokeball'>
            <img src="./images/pokeball.png" alt="Pokeball" />
          </div>
          <Filter onChange={handleFilter} forInput={'inputName'} inputID={'inputName'} typeInput={'text'} textInput={'Search by name...'}>NAME</Filter>
          <Filter onChange={handleFilter} forInput={'inputNumber'} inputID={'inputNumber'} typeInput={'number'} textInput={'Search by ID...'}>ID</Filter>
          <Filter onChange={handleFilter} forInput={'inputType'} inputID={'inputType'} typeInput={'text'} textInput={'Search by type...'}>TYPE</Filter>
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
