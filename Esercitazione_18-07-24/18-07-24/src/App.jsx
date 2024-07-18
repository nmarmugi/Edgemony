import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [storage, setStorage] = useState([]);
  const [prevStorage, setPrevStorage] = useState(null);
  const [imgUrl, setImgUrl] = useState({id: '', url: '', value: ''})
  const [isOpenModal, setIsOpenModal] = useState(false)

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

  function handleClickCard(e) {
    if (e.target.tagName === 'BUTTON') return;
    const URL = e.currentTarget.firstChild.firstChild.src;
    const ID = e.currentTarget.id;
    setImgUrl({id: ID, url: URL, value: ID})
    setIsOpenModal(true)
  }

  function handleClickFromModal(e) {
    const { value } = e.target;
    const filtered = products.filter((element) => element.id == value);
    const articleObj = filtered[0];
    setStorage((prevState) => [...prevState, articleObj]);
  }

  return (
    <>
      <div className={isOpenModal ? "w-full flex flex-wrap gap-5 mt-16 justify-around blur-sm p-16" : "p-16 w-full flex flex-wrap gap-5 mt-16 justify-around"}>
        {products.map(product => (
          <Card
            key={self.crypto.randomUUID()}
            clickCard={handleClickCard}
            cardId={product.id}
            descriptionCard={''}
            cardImg={product.images[0].replace(/[\[\]"]/g, '')}
            cardTitle={product.title}
            cardPrice={product.price}
            cardCategory={product.category.name}
            onClick={handleClick}
            buttonMessage={'ADD TO CART'}
          />
        ))}
        <Modal isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)}>
          <img className="-mt-7 mb-1" src={imgUrl.url} alt="Immagine modale" />
          <Link className="hover:text-red-300 transition-all duration-300 ease" to={`products/${imgUrl.id}`}>GO TO PRODUCT</Link>
          <button className="border p-1 mt-1 rounded-md hover:bg-red-300 hover:text-white transition-all duration-300 ease cursor-pointer" value={imgUrl.value} onClick={handleClickFromModal}>ADD TO CART</button>
        </Modal>
      </div>
    </>
  );
}

export default App;
