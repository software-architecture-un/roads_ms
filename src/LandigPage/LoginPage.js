import React from 'react';
import './LoginPage.css';


function LoginPage() {
    return (
        <div className="LoginPage">
            <div className="CajaLogin">
                <h1 className="TituloLogin">Iniciar Sesion</h1>

                <div className="ContenedorCamposLogin">
                    <label className="LabelUsuario">Usuario:</label>
                    <input className="InputUsuario" type="text"></input>
                    <br />
                    <label className="LabelPassword">Contraseña:</label>
                    <input className="InputPassword" type="password"></input>
                </div>

                <div className="BotonesEntrarVolver">
                    <a className="BotonEntrar" href="/usuario">Entrar</a>
                    <a className="BotonRegresar" href="/landing">Volver</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;