import { useState } from 'react';
import React from 'react';
import Button from './Button';
import './ImcCalc.css';

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (c) => {
    c.preventDefault();

    setHeight("");
    setWeight("");
  }

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, ""); // Passa uma regex para apenas aceitar números de 0 a 9
  }

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);

    setHeight(updatedValue);  // pega o valor do input e usa setHeight para o hook height
  }

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value); 

    setWeight(updatedValue);  // pega o valor do input e usa setWeight para o hook weight
  }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input 
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder='Exemplo 1,75'
                    onChange={(e) => handleHeightChange(e)} // Quando ocorrer alguma mudança no input dispare a função handleHeight
                    value={height}
                    />
                </div>  
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input 
                    type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder='Exemplo 70,5' 
                    onChange={(e) => handleWeightChange(e)} // Quando ocorrer alguma mudança no input dispare a função handleWeight
                    value={weight}
                    />
                </div> 
                <div className="action-control">
                  <Button 
                  text={"Calcular"} 
                  id={"calc-btn"} 
                  action={(e) => calcImc(e, height, weight)} // O evento pego pelo parâmetro action é o click, após isso vai disparar a função
                  />
                  <Button 
                  text={"Limpar"} 
                  id={"clear-btn"} 
                  action={clearForm}
                  />
                </div>  
            </div>   
        </form>
    </div>
  )
}

export default ImcCalc