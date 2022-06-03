import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Nav from "../src/components/Nav/Nav"
import Home from './views/home/Home'
import Mapamundi from './views/mapamundi/Mapamundi'
import Feed from "./views/feed/Feed"
import Form from './views/form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav/>
      <Route exact path="/">
        {/* <Home/> */}
      </Route>
      <Route exact path="/map">
        {/* <Mapamundi/> */}
      </Route>
      <Route exact path="/trip/:id">
        {/* <Feed/> */}
      </Route>
      <Route exact path="/addtrip">
        {/* <Form/> */}
      </Route>
    </div>     
  );
}

export default App;
