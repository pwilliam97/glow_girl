//Importation de REACT
import React from 'react';
import {Routes, Route} from 'react-router-dom'

//Importation des Pages
import Home from './pages/home'
import Propos from './pages/propos'
import Contact from './pages/contact'

//Importation du CSS 
import './styles/general/general.css'


function App() {
  return (
      <Routes>
          <Route path="/glow_girl/" element={<Home/>}/>
          <Route path="/A_propos/" element={<Propos/>}/>
          <Route path="/Contact/" element={<Contact/>}/>
      </Routes>
  );
}

export default App;
