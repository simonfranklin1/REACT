import { useFetch } from "../hooks/useFetch";

import { useParams, Link } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    const url = `http://localhost:3000/products/${id}`;

    const { data: produto } = useFetch(url);

    if(!produto) return <p>Carregando...</p>

    return (
        <div>
            <p>Id do produto: {produto.id} </p>
            <div>
                <h1>{produto.name}</h1>
                <p>Preço: R$ {produto.price}</p>
                {/* 8 - nested route */}
                <Link to={`/products/${produto.id}/info`}>Mais informações</Link>
            </div>
        </div>
    )
}

export default Product