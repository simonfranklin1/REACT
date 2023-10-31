import { useState, useCallback }from 'react'
import List from './List';

const HookUseCallBack = () => {
    const [ counter, setCounter ] = useState(0);

    const getItemsFromDataBase = useCallback(() => {
        return ["a", "b", "c"];
    }, []); 
    
    // para evitar de a cada renderização de outros componentes o programa buscar os dados no banco de dados

  return (
    <div>-
        <h2>UseCallBack</h2>
        <List getItems={getItemsFromDataBase} />
        <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}

export default HookUseCallBack