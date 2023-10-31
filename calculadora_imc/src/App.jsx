import { data } from "./data/data";

import { useState } from "react";

import "./components/ImcCalc";

import ImcCalc from './components/ImcCalc';

import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
        
    if(!weight || !height) return;

    const weightFloat = +weight.replace(",", "."); // Converte o valor para numérico e troca a vírgula pelo ponto
    const heightFloat = +height.replace(",", "."); // Converte o valor para numérico e troca a vírgula pelo ponto

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  }
  
  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  
  return <div className="container"> {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} /> } </div>
  /*calcImc é passado como parâmetro para o componente filho executar*/  
    
}

export default App;