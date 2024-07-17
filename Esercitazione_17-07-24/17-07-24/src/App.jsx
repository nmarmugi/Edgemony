import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [storage, setStorage] = useState([]);
  const [prevStorage, setPrevStorage] = useState(null);

  async function fetchProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
    const getCartFromStorage = JSON.parse(localStorage.getItem('cart'));
    if (getCartFromStorage) {
      setStorage(getCartFromStorage);
    }
  }, []);

  function handleClick(e) {
    const { value } = e.target;
    const filtered = products.filter((element) => element.id == value);
    const articleObj = filtered[0];
    setStorage((prevState) => [...prevState, articleObj]);
  }

  useEffect(() => {
    setPrevStorage(storage);
  }, [storage]);

  useEffect(() => {
    if (prevStorage !== null) {
      localStorage.setItem('cart', JSON.stringify(prevStorage));
    }
  }, [prevStorage]);

  return (
    <>
      <div className="w-full flex flex-wrap gap-5 mt-16 justify-around">
        {products.map(product => (
          <Card
            key={self.crypto.randomUUID()}
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
