//Importation de REACT 
import React from 'react'

//Importation du CSS
import '../styles/header/header.css'

//Importation des assets
import Logo from '../assets/logo.png'

function Header(){
    return (
        <header>
            <img src={Logo} alt={Logo} id='logo'/>
        </header>
    )
}

export default Header