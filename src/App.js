import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import Agentes from './pages/Agentes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Activo from './Componentes/Activo';


const App = () => {
  return (
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/> 
          <Route exact path="/Agentes" element={<Agentes/>}/> 
          <Route exact path='/Activos' element={<Activo/>}/>
        </Routes>
      </React.Fragment>
  );
}

export default App;