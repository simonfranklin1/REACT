import "./Button.css"

const Button = ({id, text, action}) => {

  const handleAction = (e) => {
    action(e);
  } // handleAction é uma função que executa a função passada para action

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  )
}

export default Button