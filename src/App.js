import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Me from './components/Me';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/me' exact component={Me}/>
      </Switch>
    </Router>
  );
}

export default App;
