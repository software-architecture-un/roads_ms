import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import LoginPage from './LandigPage/LoginPage';
import RegisterPage from './LandigPage/RegisterPage';
import GalleryPage from './LandigPage/GalleryPage';
import TrailsPage from './LandigPage/TrailsPage';
// import ActivitiesPage from './LandigPage/ActivitiesPage';
// import UserPage from './LandigPage/UserPage';




ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/landing' component={App} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/registro' component={RegisterPage} />
        <Route exact path='/galeria' component={GalleryPage} />
        <Route exact path='/rutas' component={TrailsPage} />
        {/* <Route exact path='/actividades' component={ActivitiesPage}/>    */}
        {/* <Route exact path='/usuario' component={UserPage}/>    */}
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
