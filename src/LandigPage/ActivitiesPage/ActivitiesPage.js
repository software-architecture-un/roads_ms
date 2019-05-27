import React from 'react';
import './ActivitiesPage.css';
import '../MainPage/LandingPage.css';
import Moto from '../../Imagenes/moto3.png';
import Arte from '../../Imagenes/arte3.png';
import Gym from '../../Imagenes/gym3.png';


function GalleryPage() {
  return (
    <div className="LandingPage">
      <div className="HeaderLandig">
        <div className="PosicionBotones">

          <a className="BotonIniciarSesion" href="/#"> Iniciar sesion </a>
          <a className="BotonCrearCuenta" href="/#"> Crear cuenta </a>

        </div>
        <h1 className="TituloLanding"> Senderos UN </h1>
      </div>

      <div className="BodyActivityLandig">
        <h2 className="TituloActividades">Mejores Actividades</h2>

        {/* ============================================================================== */}
        {/* ============================================================================== */}

        <div className="ListaActividades">

          <div className="CajaActividad">
            <div className="ImagenTarjeta">
              <img src={Moto} alt="ImagenDeActividad" width="150" height="150"></img>
            </div>
            <div className="TextoTarjeta">
              <p>Actividad 1</p>
              <p>Este es un texto de prueba para observar cual es el campo que ocupa para poder saber el tamano el cual de debe ajustar.</p>
            </div>
          </div>

          <div className="CajaActividad">
            <div className="ImagenTarjeta">
              <img src={Gym} alt="ImagenDeActividad" width="150" height="150"></img>
            </div>
            <div className="TextoTarjeta">
              <p>Actividad 1</p>
              <p>Este es un texto de prueba para observar cual es el campo que ocupa para poder saber el tamano el cual de debe ajustar.</p>
            </div>
          </div>

          <div className="CajaActividad">
            <div className="ImagenTarjeta">
              <img src={Arte} alt="ImagenDeActividad" width="150" height="150"></img>
            </div>
            <div className="TextoTarjeta">
              <p>Actividad 1</p>
              <p>Este es un texto de prueba para observar cual es el campo que ocupa para poder saber el tamano el cual de debe ajustar.</p>
            </div>
          </div>

          <div className="CajaActividad">
            <div className="ImagenTarjeta"> </div>
            <div className="TextoTarjeta">
              <p>Actividad 1</p>
              <p>Este es un texto de prueba para observar cual es el campo que ocupa para poder saber el tamano el cual de debe ajustar.</p>
            </div>
          </div>

          <div className="CajaActividad">
            <div className="ImagenTarjeta"> </div>
            <div className="TextoTarjeta">
              <p>Actividad 1</p>
              <p>Este es un texto de prueba para observar cual es el campo que ocupa para poder saber el tamano el cual de debe ajustar.</p>
            </div>
          </div>

          <div className="CajaActividad">
            <div className="ImagenTarjeta"> </div>
            <div className="TextoTarjeta">
              <p>Actividad 1</p>
              <p>Este es un texto de prueba para observar cual es el campo que ocupa para poder saber el tamano el cual de debe ajustar.</p>
            </div>
          </div>

          <div className="CajaActividad">
            <div className="ImagenTarjeta"></div>
            <div className="TextoTarjeta">
              <p>Actividad 1</p>
              <p>Este es un texto de prueba para observar cual es el campo que ocupa para poder saber el tamano el cual de debe ajustar.</p>
            </div>
          </div>


        </div>

        {/* ============================================================================== */}
        {/* ============================================================================== */}

      </div>

      <div className="FooterLandig">
        <h3 className="Universidad">Universidad Nacional De Colombia</h3>
        <h4 className="Materia">Arquitecura De software</h4>
      </div>
    </div>
  );
}

export default GalleryPage;
