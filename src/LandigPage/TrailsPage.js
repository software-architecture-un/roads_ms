import React from 'react';
import './TrailsPage.css';
import Ruta from '../imagenes/miruta.png';
import Regresar from '../imagenes/back2.png';

function TrailsPage() {
    return (
        <div className="TrailsPage">

            <div className="BotonesLoginRegistro">
                <a href="/landing" className="Regresar">
                    <img src={Regresar} alt="ImagenRegresar" width="100" height="100" />
                </a>
                <a className="IniciarSesionMainPage" href="/login">Iniciar sesion</a>
                <a className="CrearCuentaMainPage" href="/registro">Crear cuenta</a>
            </div>


            <div>
                <h1 className="TituloGaleria">Rutas</h1>
            </div>


            <div className="ListaRutas">

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="300" height="200"></img>
                    <div className="TextoInformacion">
                        <h2 className="LabelRuta">Ruta 123</h2>
                        <label className="LabelOrigen"> >> Origen:</label>
                        <p className="TextoOrigen">Universidad Nacional</p>
                        <label className="LabelDestino"> >> Destino:</label>
                        <p className="TextoDestino">Plaza de Bolivar</p>
                    </div>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="300" height="200"></img>
                    <div className="TextoInformacion">
                        <h2 className="LabelRuta">Ruta 123</h2>
                        <label className="LabelOrigen"> >> Origen:</label>
                        <p className="TextoOrigen">Universidad Nacional</p>
                        <label className="LabelDestino"> >> Destino:</label>
                        <p className="TextoDestino">Plaza de Bolivar</p>
                    </div>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="300" height="200"></img>
                    <div className="TextoInformacion">
                        <h2 className="LabelRuta">Ruta 123</h2>
                        <label className="LabelOrigen"> >> Origen:</label>
                        <p className="TextoOrigen">Universidad Nacional</p>
                        <label className="LabelDestino"> >> Destino:</label>
                        <p className="TextoDestino">Plaza de Bolivar</p>
                    </div>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="300" height="200"></img>
                    <div className="TextoInformacion">
                        <h2 className="LabelRuta">Ruta 123</h2>
                        <label className="LabelOrigen"> >> Origen:</label>
                        <p className="TextoOrigen">Universidad Nacional</p>
                        <label className="LabelDestino"> >> Destino:</label>
                        <p className="TextoDestino">Plaza de Bolivar</p>
                    </div>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="300" height="200"></img>
                    <div className="TextoInformacion">
                        <h2 className="LabelRuta">Ruta 123</h2>
                        <label className="LabelOrigen"> >> Origen:</label>
                        <p className="TextoOrigen">Universidad Nacional</p>
                        <label className="LabelDestino"> >> Destino:</label>
                        <p className="TextoDestino">Plaza de Bolivar</p>
                    </div>
                </div>

                <div className="CajaRuta">
                    <img className="ImagenRuta" src={Ruta} alt="Imagen Temporal" width="300" height="200"></img>
                    <div className="TextoInformacion">
                        <h2 className="LabelRuta">Ruta 123</h2>
                        <label className="LabelOrigen"> >> Origen:</label>
                        <p className="TextoOrigen">Universidad Nacional</p>
                        <label className="LabelDestino"> >> Destino:</label>
                        <p className="TextoDestino">Plaza de Bolivar</p>
                    </div>
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