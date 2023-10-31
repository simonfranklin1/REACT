const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h3>Detalhes do carro:</h3>
        <ul>
            <li>Marca: {brand}</li>
            <li>Kilometragem: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails