import React from 'react';
import './GalleryPage.css';
import Foto1 from '../imagenes/foto1.jpg';
import Foto2 from '../imagenes/foto2.jpg';
import Foto4 from '../imagenes/foto4.jpg';

function GalleryPage() {
    return (
        <div className="GalleryPage">

            <div className="BotonesLoginRegistro">
                <a className="IniciarSesionMainPage" href="/login">Iniciar sesion</a>
                <a className="CrearCuentaMainPage" href="/registro">Crear cuenta</a>
            </div>


            <div>
                <h1 className="TituloGaleria">Galería</h1>
            </div>


            <div className="ListaFotos">

                <div className="CajaImagen">
                    <img className="ImagenTemporal" src={Foto1} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelImagen">Galaxia 3</p>
                </div>

                <div className="CajaImagen">
                    <img className="ImagenTemporal" src={Foto4} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelImagen">Galaxia 3</p>
                </div>

                <div className="CajaImagen">
                    <img className="ImagenTemporal" src={Foto1} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelImagen">Galaxia 3</p>
                </div>

                <div className="CajaImagen">
                    <img className="ImagenTemporal" src={Foto2} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelImagen">Galaxia 3</p>
                </div>

                <div className="CajaImagen">
                    <img className="ImagenTemporal" src={Foto1} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelImagen">Galaxia 3</p>
                </div>

                <div className="CajaImagen">
                    <img className="ImagenTemporal" src={Foto4} alt="Imagen Temporal" width="350" height="250"></img>
                    <p className="LabelImagen">Galaxia 3</p>
                </div>
            </div>



            <div className="FooterMainPage">
                <h4 className="FooterH4">UNIVERSIDAD NACIONAL DE COLOMBIA</h4>
                <h6 className="FooterH6">Arquitectura De Software</h6>
            </div>

        </div>
    );
}

export default GalleryPage; 