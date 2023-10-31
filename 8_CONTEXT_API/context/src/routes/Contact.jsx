// 3 - alterando o valor context

import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

// 5 -contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
  const { counter } = useContext(CounterContext);
  const { color } = useTitleColorContext();

  return (
    <div>
        <h1 style={{color: color}}>Página de contato</h1>
        <p>O valor do contador é: {counter}</p>
    </div>
  )
}

export default Contact