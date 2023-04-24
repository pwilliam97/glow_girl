//Importation de REACT 
import React from 'react'
import {Link} from 'react-router-dom';


function Cards(props){

    const {item} = props 

    return (
        <Link to={`/Service/${item.id}`}>
            <li>{item.title}</li>
        </Link>  
    )
}

export default Cards