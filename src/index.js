import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import UserPage from './User/UserPage';
import LoginPage from './LandigPage/LoginPage';
import TrailsPage from './LandigPage/TrailsPage';
import GalleryPage from './LandigPage/GalleryPage';
import RegisterPage from './LandigPage/RegisterPage';
// import ActivitiesPage from './LandigPage/ActivitiesPage';




ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/landing' component={App} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/rutas' component={TrailsPage} />
        <Route exact path='/usuario' component={UserPage} />
        <Route exact path='/galeria' component={GalleryPage} />
        <Route exact path='/registro' component={RegisterPage} />
        {/* <Route exact path='/actividades' component={ActivitiesPage}/>    */}
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
