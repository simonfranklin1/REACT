import './App.css'
import FirstComponent from './components/FirstComponent'
// 2 - Importando componente

// 4 - Template expression
import TemplateExpression from './components/TemplateExpression';

//5 - hierarquia de componentes
import { MyComponent } from './components/MyComponent';

// 6 - Eventos
import Events from './components/Events';

function App() {
  // 3 - Comentários
  return (
  <div className='App'>
    {/* 3 - Comentário JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent /> 
    <TemplateExpression />
    <MyComponent />
    <Events />
    </div> 
  );
}

export default App
