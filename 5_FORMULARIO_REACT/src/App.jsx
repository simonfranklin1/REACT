import './App.css';
import MyForm from './components/MyForm';
import Teste from './components/Teste';

function App() {
  return (
    <div className='App'>
      <h1>Form em React</h1>
      {/*<Teste />*/}
      <MyForm userName={"Dino"} userEmail={"dinossauro@gmail.com"} userBio={"Dinossauro Rei"}/>
    </div>
  )
}

export default App
