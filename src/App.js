//Importation de REACT
import React from 'react';
import {Routes, Route} from 'react-router-dom'

//Importation des Pages
import Home from './pages/home'

//Importation du CSS 
import './styles/general/general.css'


function App() {
  return (
      <Routes>
          <Route path="/glow_girl/" element={<Home/>}/>
      </Routes>
  );
}

export default App;
