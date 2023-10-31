import { useState } from "react"

const Data = () => {
    let someData = 10; // 1. Tentando com variável

    const [anotherNumber, setAnotherNumber] = useState(10); // 2. Tentando com o useState

    const [exemplodeNumero, setExemplodeNumero] = useState(1); // 3. Tentando com outras funções

    const incrementNumber = () => {

        setExemplodeNumero((numero) => numero + 1);
        console.log(exemplodeNumero);
    }

    const decrementNumber = () => {
        if(exemplodeNumero > 0) {
            setExemplodeNumero((numero) => numero - 1);
            console.log(exemplodeNumero);
        }
    }

  return (
    <div>
        <div>
            <p>Valor: {someData}</p> {/* 1. A variável não será re-renderizada */}
            <button onClick={() => (someData++)}>Clique aqui para aumentar o valor</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p> {/* 2. Com o useState é possível alterar o valor */}
            <button onClick={() => setAnotherNumber((anotherNumber) => anotherNumber * 2)}>Clique aqui para dobrar o valor</button>
        </div>
        <div>
            <p>Valor: {exemplodeNumero}</p> {/* 3. Com o useState e funções consegui alterar o valor do número livremente */}
            <button onClick={decrementNumber}>Clique aqui para diminuir o valor</button>
            <button onClick={incrementNumber}>Clique aqui para aumentar o valor</button>
        </div>
    </div>
  )
}

export default Data;