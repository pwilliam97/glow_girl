//Importation de REACT 
import React from 'react'

//Importation des styles 
import "../styles/styles_components/Cards_presta/cards_presta.css"

function Presta(props){

    const {item} = props 

    return (
        <div className='service_presta'>
            <h2>{item.prestation}</h2>
            <h3>{item.prix}</h3>
        </div>
    )
}

export default Presta