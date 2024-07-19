import { useContext, useEffect, useState } from 'react'
import Card from './components/Card/Card'
import { SetArticlesContext } from './providers/ProviderContex'

function App() {
  const {setArticles} = useContext(SetArticlesContext)
  const [articleList, setArticleList] = useState([])

  async function getArticles() {
    const res = await fetch('http://localhost:3000/articles')
    const dataRes = await res.json()
    setArticleList(dataRes)
  }
  
  async function getCart() {
    const res = await fetch('http://localhost:3000/cart')
    const dataRes = await res.json()
    setArticles(dataRes)
  }

  useEffect(() => {
    getArticles()
    getCart()
  }, [])

  async function POST(obj) {
    const res = await fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    const dataRes = await res.json()
    return dataRes;
  }

  function handleClick(obj) {
    setArticles((prevState => ([...prevState, obj])))
    POST(obj)
  }

  return (
    <div className="p-16 mt-5 flex flex-wrap gap-7 justify-around">
      {
        articleList.map((article => <Card key={article.id} cardId={article.id}
                                              cardTitle={article.title}
                                                cardDescription={article.description}
                                                  cardPrice={article.price}
                                                    onClick={() => handleClick(article)}
                                                      textButton={'ADD TO CART'}/>))
      }
    </div>
  )
}

export default App
