import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [storage, setStorage] = useState([]);

  async function fetchProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleClick(e) {
    const { value } = e.target;
    const filtered = products.filter((element) => element.id == value);
    const articleObj = filtered[0];
    setStorage((prevState) => [...prevState, articleObj]);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(storage));
  }, [storage]);

  return (
    <>
      <div className="w-full flex flex-wrap gap-5 mt-16 justify-around">
        {products.map(product => (
          <Card
            key={product.id}
            cardId={product.id}
            cardImg={product.images[0].replace(/[\[\]"]/g, '')}
            cardTitle={product.title}
            cardPrice={product.price}
            cardCategory={product.category.name}
            onClick={handleClick}
            buttonMessage={'AGGIUNGI AL CARRELLO'}
          />
        ))}
      </div>
    </>
  );
}

export default App;
