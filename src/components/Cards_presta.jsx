//Importation de REACT 
import React from 'react'

function Presta(props){

    const {item} = props 

    return (
        <div>
            <h2>{item.prestation}</h2>
            <h3>{item.prix}</h3>
        </div>
    )
}

export default Presta