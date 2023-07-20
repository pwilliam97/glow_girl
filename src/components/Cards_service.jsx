//Importation de REACT 
import React from 'react'
import {Link} from 'react-router-dom';

//Importation des styles
import "../styles/styles_components/Cards_service/cards_service.css"

function Card(props){

    const {item} = props 

    return (
        <Link to={`/prestation/${item.id}`}  className='service_link'>
            <li>{item.title}</li>
        </Link>  
    )
}

export default Card