import React from 'react';
import './TrailsPage.css';
import Ruta from '../imagenes/miruta.png';

function TrailsPage() {
    return (
        <div className="TrailsPage">

            <div className="BotonesLoginRegistro">
                <a className="IniciarSesionMainPage" href="/login">Iniciar sesion</a>
                <a className="CrearCuentaMainPage" href="/registro">Crear cuenta</a>
            </div>


            <div>
                <h1 className="TituloGaleria">Rutas</h1>
            </div>


            <div className="ListaRutas">

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="350" height="200"></img>
                    <p className="LabelRuta">Ruta 123</p>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelRuta">Galaxia 3</p>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelRuta">Galaxia 3</p>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelRuta">Galaxia 3</p>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelRuta">Galaxia 3</p>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelRuta">Galaxia 3</p>
                </div>

            </div>

            <div className="FooterMainPage">
                <h4 className="FooterH4">UNIVERSIDAD NACIONAL DE COLOMBIA</h4>
                <h6 className="FooterH6">Arquitectura De Software</h6>
            </div>

        </div>
    );
}

export default TrailsPage; 