import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
    return (
        <div className="RegisterPage">

            <div className="CajaRegistro">
                <h1 className="TituloRegistro">Registro</h1>

                <div className="ContenedorCamposRegistro">
                    <label className="LabelRegistroNombre">Usuario:</label>
                    <br />
                    <input className="InputRegistroNombre" type="text"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroIdentificacion">Identificacion:</label>
                    <br />
                    <input className="InputRegistroIdentificacion" type="number"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroEdad">Edad:</label>
                    <br />
                    <input className="InputRegistroEdad" type="number"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroGenero">Genero:</label>
                    <br />
                    <input className="InputRegistroGenero" type="text"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroPassword">Contraseña:</label>
                    <br />
                    <input className="InputRegistroPassword" type="password"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroConfirmarPassword">Confirmar contraseña:</label>
                    <br />
                    <input className="InputRegistroConfirmarPassword" type="password"></input>
                    <br />
                    <br />

                </div>

                <div className="BotonesCrearVolver">
                    <a className="BotonCrear" href="/usuario">Crear Cuenta</a>
                    <a className="BotonRegistroRegresar" href="/landing">Volver</a>
                </div>
            </div>

        </div>
    );
}

export default RegisterPage;