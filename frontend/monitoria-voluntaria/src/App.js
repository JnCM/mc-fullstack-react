import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Materiais from './pages/materiais/materiais';
import Monitores from './pages/monitores/monitores';
import Cadastro from './pages/cadastro/cadastro';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/monitores">
          <Monitores />
        </Route>
        <Route path="/materiais">
          <Materiais />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
