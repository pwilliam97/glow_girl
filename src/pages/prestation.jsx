// Importation de REACT
import React from 'react'
import { useParams } from 'react-router-dom'

//Importation des Components
import Presta from '../components/Cards_presta'

//Importation des assets
import Categorie from '../assets/categorie.json'

// Importation du CSS 
import '../styles/container/container.css'

function Prestation(){

    const {serviceId} = useParams();
    const service = Categorie.find((item) => item.id === serviceId)

    return (
        <main>
            <div>
                {service.offre.map((item) => <Presta item = {item} key={item.id}/>)}   
            </div> 
        </main>
    )
}

export default Prestation