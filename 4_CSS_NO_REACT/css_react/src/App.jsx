import './App.css'

// 2 - CSS de componente
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  // 4 - inline style dinamico
  const x = true;

  // 5 - classes dinamicas
  const redTitle = true;

  return (
    <div className="App">
      {/* 1 - css global */}
      <h1>CSS no React</h1>
      {/* 2 - css de componente */}
      <MyComponent />
      <p>Pegou o css do componente</p>
      {/* 3 - inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline(também pegou css do componente)</p>
      {/* 4 - inline style dinamico */}
      <h2 style={x ? {color: "purple"} : {color: "orangered"}}>
        Css dinâmico
      </h2>
      {/* 5 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
      {/* 6 - css modules */}
      <Title />
      <h1>Não pegou css</h1>
    </div>
  )
}

export default App
