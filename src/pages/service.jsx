// Importation de REACT
import React from 'react'
import { useParams } from 'react-router-dom'

//Importation des Components
import Cardspresta from '../components/Cards_presta'

//Importation des assets
import Categorie from '../assets/categorie.json'

// Importation du CSS 
import '../styles/container/container.css'

function Service(){

    const {serviceId} = useParams();
    const service = Categorie.find((item) => item.id === serviceId)

    return (
        <main>
            <div>
                {service.offre.map((item) => <Cardspresta item = {item} key={item.id}/>)}   
            </div> 
        </main>
    )
}

export default Service