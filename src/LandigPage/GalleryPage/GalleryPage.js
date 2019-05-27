import React from 'react'
import './GalleryPage.css'
import '../MainPage/LandingPage.css'
import Foto1 from '../../Imagenes/foto1.jpg';
import Foto2 from '../../Imagenes/foto2.jpg';
import Foto4 from '../../Imagenes/foto4.jpg';


function GalleryPage(){
    return(
        <div className="LandingPage">
            
            <div className="HeaderLandig">
                <div className="PosicionBotones">
                    <a className="BotonIniciarSesion" href="/#"> Iniciar sesion </a>
                    
                    <a className="BotonCrearCuenta" href="/#"> Crear cuenta </a>
                </div>
                <h1 className="TituloLanding"> Senderos UN </h1>
            </div>

            <div className="BodyGalleryLandig">
                <h2 className="TituloGaleria">Galeria De Fotos</h2>
                
{/* ==============================================================================
============================================================================== */}

                <div className="ListaFotos">

                    <div className="CajaImagenTest">
                        {/* <img src={Foto1}  width="150" height="75"></img> */}
                        {/* <p>Este es un texto de prueba para la imagen</p> */}
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto2} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto4} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto1} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto1} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto1} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto1} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto1} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto1} alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>

                    <div className="CajaImagen">
                        <img src={Foto1}  alt="Imagen Temporal" width="150" height="75"></img>
                        <p>Este es un texto de prueba para la imagen</p>
                    </div>



                    
{/* ==============================================================================
============================================================================== */}

                </div>
            </div>

            <div className="FooterLandig">
                    <h3 className="Universidad">Universidad Nacional De Colombia</h3>
                    <h4 className="Materia">Arquitecura De software</h4> 
            </div>

        </div>
    );
}

export default GalleryPage;