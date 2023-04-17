//Importation de REACT 
import React from 'react'
import {Link} from 'react-router-dom';


function Cards(props){

    const {item} = props 

    return (
        <Link to={`/Service/${item.id}`}>
            <h1>{item.title}</h1>
        </Link>  
    )
}

export default Cards