import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Simon"]);

    const[users, setUsers] = useState([
        {id: 1, name: "Simon", age: 20},
        {id: 2, name: "Matheus", age: 31},
        {id: 3, name: "Jonas", age: 27},
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id)
        );
    }

    return (
        <div>
            {/* 4 - render sem key*/}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {/* 5 - render com key*/}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>   
                ))}
            </ul>
            {/* 6 - previous state */}
            <button onClick={deleteRandom}>Deletar usuário aleatório</button>
        </div>
    )
}

export default ListRender