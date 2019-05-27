import React from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.          
        </p>
        <p>bienvenidos a la app de SENDEROS UN</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to= '/places'>Ingresar a Lugares</Link>
        <Link to= '/routes'>Ingresar a Rutas</Link>
      </header>
    </div>
  );
}

export default App;
