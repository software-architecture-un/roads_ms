import React from 'react';
import './UserPage.css';

function UserPage() {
    return (
        <div className="UserPage">

            <div className="BarraMenuLateral">

                <div className="MiniDatoUsuario">
                    <img className="FotoPerfil" width="160" height="160"></img>
                    <h2 className="NombreUsuario">Fulanito Perez</h2>
                </div>

                <div className="OpcionMenu">
                    <h2 className="NombreMenu DatosPersonales">MODIFICAR DATOS</h2>
                </div>

                <div className="OpcionMenu">
                    <h2 className="NombreMenu CrearListas">CREAR LISTAS</h2>
                </div>

                <div className="OpcionMenu">
                    <h2 className="NombreMenu VerListas">VER LISTAS</h2>
                </div>

                <div className="OpcionMenu">
                    <h2 className="NombreMenu  Lugares">LUGARES</h2>
                </div>

                <div className="OpcionMenu">
                    <h2 className="NombreMenu EliminarCuenta">ELIMINAR CUENTA</h2>
                </div>

                <div className="OpcionMenu">
                    <h2 className="NombreMenu CerrarSesion">SALIR</h2>
                </div>

            </div>

            <div className="ObjetivoMenuLateral">

            </div>

        </div>
    );
}

export default UserPage;