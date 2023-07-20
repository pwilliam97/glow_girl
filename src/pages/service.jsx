// Importation de REACT
import React from 'react'

//Importation des Components
import Cards from '../components/Cards_service'

//Importation des assets
import Categorie from '../assets/categorie.json'

// Importation du CSS 
import '../styles/container/container.css'
import '../styles/styles_components/Cards_service/cards_service.css'

function Service(){

    return (
        <main>
            <div>{Categorie.map((item) => <Cards item = {item} key={item.id}/>)}</div>            
        </main>      
    )
}

export default Service