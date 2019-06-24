import React from 'react';
import './RegisterPage.css';
import DirectionGraphq from '../conection/IpGraphql';

class RegisterPage extends React.Component {

    status = {
        
    }

    handleClick = e => { 
        
        console.log("=====================================================================")
        console.log("--> ESTO ES PARA REGISTRARSE")

        const query = `
            mutation {
                createUser(user: {
                    name:"${this.state.CampoNombre}"
                    document:"${this.state.CampoDocumento}"
                    age:${this.state.CampoEdad}
                    email: "${this.state.CampoEmail}"
                    password: "${this.state.CampoPassword}"
                }) {
                content {
                    name
                    document
                    age
                    email
                    password_digest
                }
                message
                }
            }
        `;


        const url = DirectionGraphq;
        const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
        };

        fetch(url, opts)
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
        console.log("=====================================================================\n\n")
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })

    }

    render(){
        return(
            <div className="RegisterPage">
            <div className="CajaRegistro">
                <h1 className="TituloRegistro">Registro</h1>

                <div className="ContenedorCamposRegistro">
                    <label className="LabelRegistroNombre">Nombre:</label>
                    <br />
                    <input name="CampoNombre" onChange={this.handleChange} className="InputRegistroNombre" value={this.state.CampoNombre} type="text"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroIdentificacion">Identificación:</label>
                    <br />
                    <input className="InputRegistroIdentificacion" type="number"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroEdad">Edad:</label>
                    <br />
                    <input className="InputRegistroEdad" type="number"></input>
                    <br />
                    <br />
                    <label className="LabelRegistroGenero">Correo electrónico:</label>
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
                    <a className="BotonCrear">Crear Cuenta</a>
                    <a className="BotonRegistroRegresar" href="/">Volver</a>
                </div>
            </div>

        </div>                        
        );
    }
}

export default RegisterPage;
// href="/usuario"