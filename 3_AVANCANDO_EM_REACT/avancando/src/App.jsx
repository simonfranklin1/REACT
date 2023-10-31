import './App.css';

// 2 - imagens em assets
import night from './assets/night.jpg';
import ConditionalRender from './components/ConditionalRender';

// 3 - useState
import Data from './components/Data';

// 4 - Renderização de lista
import ListRender from './components/ListRender';

// 8 - props
import ShowUserName from './components/ShowUserName';

// 9 - desestruturando props
import CarDetails from './components/CarDetails';

// 11 - renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000},
];

// 12 - fragments
import Fragment from './components/Fragment';

// 13 - children
import Container from './components/Container';

//14 - função em prop
import ExecuteFunction from './components/ExecuteFunction';

//15 - state lift
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';

function App() {

  //14 - funçao em prop
  function showMessage() {
    console.log("Evento componente pai")
  }

  // 15 - state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return(
  <div className='App' style={{paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagens em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - render de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Simon" />
      {/* 9 - Desestruturando props */}
      <CarDetails  brand="Fiat" km={999} color="branco"/>
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Vw" km={1000} color="azul"/>
      <CarDetails brand="Honda" km={5000} color="preto"/>
      {/* 11 - renderização de lista com componente*/}
      <h2>Renderização de lista com Componentes</h2>
        {cars.map((car) => (
          <CarDetails 
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color} />
        ))}
      {/* 12 - Fragments */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>alguma coisa</p> 
      </Container>
      <Container>
      <div>
        <h2>Teste</h2>
        <p>Meu container</p>
      </div>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
