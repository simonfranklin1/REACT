import React from 'react';
import { useState } from 'react';
import classes from './Teste.module.css';

const Teste = () => {
    const [valor, setValor] = useState(10);

    const dobrarValor = () => {
        setValor((valorr) => valorr * 2);
        console.log(valor);
    }
    return (
        <div>
            <h3 className={classes.titulo}>{valor}</h3>
            <button onClick={dobrarValor} className={classes.botao}>Clique para dobrar o valor</button>
        </div>
    )
}

export default Teste