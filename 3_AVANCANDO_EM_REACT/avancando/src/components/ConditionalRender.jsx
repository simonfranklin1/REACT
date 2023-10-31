import React from 'react'

const ConditionalRender = () => {
    const x = true;

    const name = "Simon"

    return <div>
        {/* 7 - render condicional */}
        <h2>Render Condicional</h2>
        <h3>Isso será exibido?</h3>  
        {x && <p>Se x for true sim!</p>}   
        {/* 8 - else */} 
        <h2>Render Ternário</h2> 
        {name === "Jonas" ?(
           <div>
                <p>Olá, Jonas!</p>
           </div> 
        ) : (
            <div>
                <p>Olá, {name}!</p>
            </div>
        ) }
    </div>
}

export default ConditionalRender