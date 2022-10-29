import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage.jsx';

const App = () => {
  return (
      <React.Fragment>     
          <Route exact path="/" component={LandingPage}/> 
      </React.Fragment>
  );
}

export default App;