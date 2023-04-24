// Importation de REACT
import React from 'react'

//Importation des Components

//Importation des assets
import Zen from '../assets/zen.jpg'

// Importation du CSS 
import '../styles/container/container.css'

function Contact(){

    return (
        <main>
            <div>
                <img src={Zen} alt="bien-être"/>
                <h2>Pour prendre vos rendez-vous</h2>
                <h3>Contactez moi par :</h3>
                <ul>
                    <li>Tél : 06.56.86.33.55</li>
                    <li>Mail : <a href="mailto:glow.girl.esthetique@gmail.com">glow.girl.esthetique@gmail.com</a></li>
                </ul>
            </div>
        </main>
    )
}

export default Contact