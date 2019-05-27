import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import PruebaLugares from './components/PruebaLugares';
import PruebaRutas from './components/PruebaRutas';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <div>
        <Route exact path='/' component={App}/>        
        <Route exact path='/places' component={PruebaLugares}/>
        <Route exact path='/routes' component={PruebaRutas}/>        
    </div>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
