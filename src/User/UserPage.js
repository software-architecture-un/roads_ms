import React from 'react';

function UserPage() {
    return (
        <div className="UserPage">
            <div className="MenuLateral">

            </div>

            <div className="PanelPrincipal">
                <div>
                    <h1>DATOS PERSONALES</h1>
                </div>

                <div className="ModificacionDatosPersonales">
                    <div className="LabelsDatosPersonales">
                        <label className="LabelUserNombre">Nombre:</label>
                        <label className="LabelUserIdentificacion">Identificacion:</label>
                        <label className="LabelUserEdad">Edad:</label>
                        <label className="LabelUserGenero">Genero:</label>
                        <label className="LabelUserContrasena">Contraseña:</label>
                        <label className="LabelUserConfirmarContrasena">Confirmar contraseña:</label>
                    </div>

                    <div className="InputsDatosPersonales">
                        <input className="InputUserNombre" />
                        <input className="InputUserIdentificacion" />
                        <input className="InputUserEdad" />
                        <input className="InputUserGenero" />
                        <input className="InputUserContrasena" />
                        <input className="InputUserConfirmarContrasena" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;