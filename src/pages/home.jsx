// Importation de REACT
import React from 'react'


//Importation des Components
import Cardshome from '../components/Cards_home'

//Importation des assets
import Categorie from '../assets/categorie.json'

// Importation du CSS 
import '../styles/container/container.css'

function Home(){

    return (
        <main>
            <div>{Categorie.map((item) => <Cardshome item = {item} key={item.id}/>)}</div>            
        </main>
    ) 
}

export default Home