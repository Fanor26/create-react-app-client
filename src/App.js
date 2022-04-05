import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import Contenedor from './components/Contenedor'
import container from './components/container'
import grid from './components/grid'

function App() {
  return (
    <Router>
         <Route path="/" exact component={Contenedor}/>
         <Route path="/" exact component={container}/>
         <Route path="/grid" exact component={grid}/>
         
      </Router>
  );
}

export default App;
