// Importation de REACT
import React from 'react'

//Importation des Components
import Cardshome from '../components/Cards_home'

//Importation des assets
import Categorie from '../assets/categorie.json'

// Importation du CSS 
import '../styles/container/container.css'

function Propos(){

    return (
        <main>
            <div>
                <h1>Salut les filles</h1>
                <p>La plupart d'entre vous est au courant déjà mais, je passe mon CAP esthétique cette année, mais avant cela je cherche à m'entraîner pour mes différentes épreuves pratiques !</p>
                <p>J'aurais besoin de vous pour m'entraîner pour :</p>
                {Categorie.map((item) => <Cardshome item = {item} key={item.id}/>)}
                <p>Je suis dispo les dimanches et lundis, les mardis matin et certaines soirée en semaines!</p>
                <p>Le tout sera à un prix raisonnable puicque je suis qu'en apprentissage et permettra de financer le matériels et les produits utilisés</p>
                <p>N'hésitez pas si vous êtes intéressées</p>
                <p>Océ</p>
            </div>
        </main>
    )
}

export default Propos