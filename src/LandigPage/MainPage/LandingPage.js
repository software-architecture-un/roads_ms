import React from 'react'
import './LandingPage.css'
import Camara from '../../imagenes/camara1.png';
import Ruta from '../../imagenes/rutas1.png';
import Actividad from '../../imagenes/actividad1.png';
import {Link} from 'react-router-dom';

function LandingPage(){
    return(
        <div className="LandingPage">
            
            <div className="HeaderLandig">
                <div className="PosicionBotones">
                    <a className="BotonIniciarSesion" href="/#"> <Link to= '/login'>Iniciar sesion</Link> </a>
                    
                    <a className="BotonCrearCuenta" href="/#"> <Link to= '/registro'>Crear cuenta</Link> </a>
                </div>
                <h1 className="TituloLanding"> Senderos UN </h1>
            </div>

            <div className="BodyLandig">
                <div className="CajaGaleria">
                    <h2 className="SubTitulos">Galeria De Fotos</h2>
                    <img  src={ Camara } width="250" height="250" alt="Imagen_Camara"></img>
                    <div className="TextoJustificado">
                        <p>En nuestra galeria podras las fotos que mas les han gustado a nuestros usuarios.</p>
                        <p>Muestranos como ves el mundo.</p>
                    </div>
                </div>

                <div className="CajaImagenes">
                    <h2 className="SubTitulos">Rutas</h2>
                    <img src={ Ruta } width="250" height="250" alt="Imagen_Ruta" ></img>
                    <div className="TextoJustificado">
                        <p>Aqui encontraras las rutas preferidas por los usarios.</p>
                        <p>Camina, conduce y descubre los caminos que el mundo tiene preparado para ti-</p>
                    </div>

                </div>

                <div className="CajaActividades">
                    <h2 className="SubTitulos">Actividades</h2>
                    <img className="ImagenActividades" src={ Actividad } width="200" height="200" alt="Imagen_Ruta" ></img>
                    <div className="TextoJustificado">
                        <p>Comparte en familia y con amigos de miles de actividades que estan esperando por ti.</p>
                        <p>Cambia tu rutina ven y descubre lo que tenemos preparado para ti.</p>
                    </div>
                </div>
            </div>

            <div className="FooterLandig">
                    <h3 className="Universidad">Universidad Nacional De Colombia</h3>
                    <h4 className="Materia">Arquitecura De software</h4> 
            </div>

        </div>
    );
}

export default LandingPage;