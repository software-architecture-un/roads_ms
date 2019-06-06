import React from 'react';
import ReactDOM from 'react-dom';
import './LandigPage/index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './LandigPage/App';
import LoginPage from './InitCreate/LoginPage';
import UserPage from './UserPage/UserPage';
import GalleryPage from './LandigPage/GalleryPage/GalleryPage';
import ActivitiesPage from './LandigPage/ActivitiesPage/ActivitiesPage';
import RegisterPage from './InitCreate/RegisterPage';



ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route exact path='/rutas' component={UserPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/galeria' component={GalleryPage} />
        <Route exact path='/registro' component={RegisterPage} />
        <Route exact path='/actividades' component={ActivitiesPage} />
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
