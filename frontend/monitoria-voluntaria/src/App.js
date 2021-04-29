import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import Materiais from './pages/materiais/materiais';
import Monitores from './pages/monitores/monitores';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
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
