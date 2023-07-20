//Importation de REACT
import React from 'react';
import {Routes, Route} from 'react-router-dom'

//Importation des Components
import Header from './components/Header'

//Importation des Pages
import Home from './pages/home'
import Prestation from './pages/prestation'
import Contact from './pages/contact'
import Service from './pages/service'
 
//Importation du CSS 
import './styles/general/general.css'

function App() {
  return (
    <div id="container">
      <Header/>
      <Routes>
        <Route path="/glow_girl/" element={<Home/>}/>
        <Route path="/Service/" element={<Service/>}/>
        <Route path="/Contact/" element={<Contact/>}/>
         <Route path="/Prestation/:serviceId" element={<Prestation/>}/>
      </Routes>
    </div>

  );
}

export default App;
