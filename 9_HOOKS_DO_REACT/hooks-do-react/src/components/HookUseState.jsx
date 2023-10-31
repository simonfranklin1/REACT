import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = "Jonas";
    const [name, setName] = useState("Simon");

    const changeNames = () => {
        userName = "Jonas Paiva";

        setName("Simon Franklin")
    }

    // 2 useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault();
            
        console.log(age);
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>useState: {name}</p>
        <p>variável: {userName}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/* 2 - useState com inputs */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos de idade.</p>
        <hr />
    </div>
  )
}

export default HookUseState