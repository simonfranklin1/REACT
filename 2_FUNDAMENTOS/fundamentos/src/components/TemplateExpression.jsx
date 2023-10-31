// 4 - Template expression

export const TemplateExpression = () => {
    const name = "Simon";

    const data = {
        age: 20,
        job: "Programador",
        surname: "Franklin"
    }

  return (
    <div>
        <p>A soma é : {2 + 2}</p>
        <h3>Bem Vindo {name} {data.surname}</h3>
        <p>Sua idade é {data.age} anos, e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression;