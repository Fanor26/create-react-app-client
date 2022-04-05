import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import Contenedor from './components/Contenedor'
import container from './components/container'
function App() {
  return (
    <Router>
         <Route path="/" exact component={Contenedor}/>
         <Route path="/" exact component={container}/>
      </Router>
  );
}

export default App;
