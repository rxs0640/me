import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Me from './components/Me';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Me' exact component={Me}/>
        <Route path='/Projects' exact component={Projects}/>
        <Route path='/About' exact component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
