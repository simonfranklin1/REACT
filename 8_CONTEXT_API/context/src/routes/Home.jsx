// 3 - alterando o valor context

/*import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"*/

// 4 - refatorando contexto
import useCounterContext from "../hooks/useCounterContext"
import ChangeCounter from "../components/ChangeCounter"

// 5 -contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  //const { counter } = useContext(CounterContext)
  // 4 - refatorando contexto com o hook
  const {counter} = useCounterContext();
  const {color, dispatch} = useTitleColorContext();

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador: {counter} </p>
        <ChangeCounter />
        <button onClick={() => dispatch({type: "RED"})}>Vermelho</button>
        <button onClick={() => dispatch({type: "BLUE"})}>Azul</button>
    </div>
  )
}

export default Home