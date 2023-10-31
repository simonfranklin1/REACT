import { useReducer, useState } from 'react'

const HookUseReducer = () => {

    // 1 - Começando com o useReducer
    const [ number, dispatch ] = useReducer((state, action) => {
        return Math.random(state)
    })

    // 2 - avançando em useReducer
    const initialTasks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"},
    ];

    const taskReducer = (state, action) => {

        switch(action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText("");

                return [...state, newTask];

            case "DELETE":
                return state.filter((task) => task.id !== action.id);

            default:
                return state;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({type: "ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  return (
    <div>
        <h2>UseReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type="submit" value="Enviar" />
        </form>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)} >{task.text}</li>
            ))}
        </ul>

        <hr />
    </div>
  )
}

export default HookUseReducer