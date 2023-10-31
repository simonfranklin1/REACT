import { useState, useEffect } from 'react';

import './App.css';

import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {

  // 1 - resgatando dados
  /*const [products, setProducts] = useState([]);

  useEffect(() => {

    async function getData() {
      const res = await fetch(url) // fetch é um recurso no javascript que faz chamadas assíncronas

      const data = await res.json()

      setProducts(data);
    }

    getData()
  }, []);*/

  // 4 - custom hook 
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault(); 
    
    const product = {
      name,
      price
    };
    
    // 5 - refatorando
    httpConfig(product, "POST");

    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(product),
    }); 

    // 3 - carregamento dinamico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);*/
  }

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando...</p>}
      {/* 7 - tratando erro */}
      {error && <p>{error}</p>}
      {/* 1 - resgate de dados */}
      <ul>
        {items && items.map((product) => (
          <li key={product.id} >{product.name} - R${product.price}</li>
        ))}
      </ul>
      {/* 2 - enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={function(e) { setName(e.target.value)}} />
          </label>
          <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/*<input type="submit" value="Enviar" /> */} 
          {/* 6 - loading post */}
          {loading && <input type='submit' disabled value="Aguarde" />}
          {!loading && <input type='submit' value="Enviar" />}
        </form>
      </div>
    </div>
  )
}

export default App