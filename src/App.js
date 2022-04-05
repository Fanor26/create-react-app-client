import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import Contenedor from './components/Contenedor'

function App() {
  return (
    <Router>
         <Route path="/" exact component={Contenedor}/>
      </Router>
  );
}

export default App;
