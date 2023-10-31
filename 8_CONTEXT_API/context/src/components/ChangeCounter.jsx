/*import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"*/
import useCounterContext from "../hooks/useCounterContext";

const ChangeCounter = () => {
    //const {setCounter} = useContext(CounterContext);
    const{setCounter} = useCounterContext();

    const incrementar = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }

    const decrementar = () => {
        setCounter((prevCounter) => prevCounter - 1);
    }

  return (
    <div>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default ChangeCounter