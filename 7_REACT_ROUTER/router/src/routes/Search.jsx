import {useFetch} from "../hooks/useFetch";

import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
    const [ searchParams ] = useSearchParams(); //nome do produto digitado na url

    const url = `http://localhost:3000/products?${searchParams}`; // filtra os produtos que batem com o valor de searchParams 

    const { data: items } = useFetch(url); //carrega os dados do produto que esta dentro do array de objetos da url


  return ( // Carrega o produto
    <div>
        <h1>Resultados da pesquisa</h1>
        <ul className="products">
          {items && items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 7 - rota dinâmica */}
              <Link to={`/products/${item.id}`}><p>Detalhes</p></Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Search