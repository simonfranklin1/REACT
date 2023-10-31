import { useState } from 'react'; // useState para salvar o valor do input

import { useNavigate } from 'react-router-dom'; // useNavigate para fazer a passagem de página(alterando a url)

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${query}`); // coloca este texto na url que direciona a rota Search;

        setQuery("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} placeholder='Buscar' />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm