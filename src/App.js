import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import Agentes from './pages/Agentes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
      <React.Fragment>     
          <Route exact path="/" component={LandingPage}/> 
          <Route exact path="/Agentes" component={Agentes}/> 
      </React.Fragment>
  );
}

export default App;