import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './components/App';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <div>
        <Route exact path='/' component={App}/>        
        <Route exact path='/registro' component={RegisterPage}/>
        <Route exact path='/login' component={LoginPage}/>        
    </div>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
