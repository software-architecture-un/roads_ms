import React from 'react';
import './LoginPage.css';
import DirectionGraphq from '../conection/IpGraphql';


class LoginPage extends React.Component {

    state = {

    }

    handleClick = e => {

        console.log("=====================================================================")
        console.log("--> ESTO ES PARA LOGEARSE")

        const query = `
            mutation {
                signIn(user: {
                    email: "${this.state.CampoUsuario}"
                    password: "${this.state.CampoPassword}"
                }) {
                    content
                    message
                    status
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

    render() {
        return (
            <div className="LoginPage">
                <div className="CajaLogin">
                    <h1 className="TituloLogin">Iniciar Sesión</h1>

                    <div className="ContenedorCamposLogin">
                        <label className="LabelUsuario">Usuario:</label>
                        <input name="CampoUsuario" onChange={this.handleChange} className="InputUsuario" value={this.state.CampoUsuario} type="text"></input>
                        <br />
                        <label className="LabelPassword">Contraseña:</label>
                        <input name="CampoPassword" onChange={this.handleChange} className="InputPassword" value={this.state.CampoPassword} type="password"></input>
                    </div>

                    <div className="BotonesEntrarVolver">
                        <a href="/user" onClick={this.handleClick} className="BotonEntrar">Entrar</a>
                        <a className="BotonRegresar" href="/">Volver</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default LoginPage;

// href="/usuario"
