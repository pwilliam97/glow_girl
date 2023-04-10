//Importation de REACT 
import React from 'react'
import {Link} from 'react-router-dom';

//Importation du CSS
import '../styles/header/header.css'

//Importation des assets
import Logo from '../assets/logo.png'

function Header(){
    return (
        <header>
            <Link to="/glow_girl/"><img src={Logo} alt={Logo} id='logo'/></Link>
            <ul className='header_list'>
                <Link to="/A_propos/"><li>A Propos de moi</li></Link>
                <Link to="/Contact/"><li>Contact</li></Link>
            </ul>
        </header>
    )
}

export default Header