// Importation de REACT
import React from 'react'

//Importation des Components
import Header from '../components/header'

// Importation du CSS 
import '../styles/main/main.css'

function Home(){

    return (
        <main>
            <Header/>
            <p>Ceci est la page d'acceuil</p>
        </main>
    )
}

export default Home