import React from 'react';
import './GalleryPage.css';
import Foto1 from '../imagenes/foto1.jpg';
import Foto2 from '../imagenes/foto2.jpg';
import Foto4 from '../imagenes/foto4.jpg';
import Regresar from '../imagenes/back2.png';
import ContenedorImagenGaleria from './ContenedorImagenGaleria';


function GalleryPage() {
    return (
        <div className="GalleryPage">

            <div className="BotonesLoginRegistro">
                <a href="/landing" className="Regresar">
                    <img src={Regresar} alt="ImagenRegresar" width="100" height="100" />
                </a>
                <a className="IniciarSesionMainPage" href="/login">Iniciar sesion</a>
                <a className="CrearCuentaMainPage" href="/registro">Crear cuenta</a>
            </div>

            <div>
                <h1 className="TituloGaleria">Galería</h1>
            </div>

            <div className="ListaFotos">

                <ContenedorImagenGaleria MyImage={Foto1} TituloImagen="Galaxia 3" MyWidth="350" MyHeight="250" />
                <ContenedorImagenGaleria MyImage={Foto4} TituloImagen="Galaxia 3" MyWidth="350" MyHeight="250" />
                <ContenedorImagenGaleria MyImage={Foto1} TituloImagen="Galaxia 3" MyWidth="350" MyHeight="250" />
                <ContenedorImagenGaleria MyImage={Foto2} TituloImagen="Galaxia 3" MyWidth="350" MyHeight="250" />
                <ContenedorImagenGaleria MyImage={Foto1} TituloImagen="Galaxia 3" MyWidth="350" MyHeight="250" />
                <ContenedorImagenGaleria MyImage={Foto4} TituloImagen="Galaxia 3" MyWidth="350" MyHeight="250" />

            </div>

            <div className="FooterMainPage">
                <h4 className="FooterH4">UNIVERSIDAD NACIONAL DE COLOMBIA</h4>
                <h6 className="FooterH6">Arquitectura De Software</h6>
            </div>

        </div>
    );
}

export default GalleryPage; 