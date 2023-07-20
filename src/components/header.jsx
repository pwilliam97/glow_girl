//Importation de REACT 
import React from 'react'
import {Link} from 'react-router-dom';

//Importation du CSS
import '../styles/styles_components/header/header.css'

//Importation des assets
import Logo from '../assets/logo.png'

function Header(){
    return (
        <header>
            <Link to="/glow_girl/"><img src={Logo} alt={Logo} id='logo'/></Link>
            <ul className='header_list'>
                <Link to="/service/"><li>Mes services</li></Link>
                <Link to="/contact/"><li>Contact</li></Link>
            </ul>
        </header>
    )
}

export default Header