import React, { Component } from 'react';
import './RegisterPage.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
}

class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombres: null,
            documento: null,
            edad: null,
            // genero:null,
            correo: null,
            contrasena: null,
            formErrors: {
                nombres: "",
                documento: "",
                edad: "",
                correo: "",
                contrasena: ""
            }
        };
        // this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state.formErrors)) {
            console.log(`
      --SUBMITTING--
      Nombre:${this.state.nombres}
      Documento:${this.state.documento}
      Edad:${this.state.edad}
      Correo:${this.state.correo}
      Contrasena:${this.state.contrasena}
      `)
        } else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        // console.log("nombres: ", name);
        // console.log("value: ", value);

        switch (name) {
            case "nombres":
                formErrors.nombres =
                    value.length < 10 ? 'minimo 10 caracteres requeridos' : "";
                break;

            case "documento":
                formErrors.documento =
                    value.length < 3 ? 'minimo 3 caracteres requeridos' : "";
                break;

            case "edad":
                formErrors.edad =
                    value.length < 2 ? 'minimo 2 caracteres requeridos' : "";
                break;

            case "correo":
                formErrors.correo = emailRegex.test(value)
                    ? ''
                    : "dirección de correo invalida";
                break;

            case "contrasena":
                formErrors.contrasena =
                    value.length < 6 ? 'minimo 6 caracteres requeridos' : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    };

    render() {
        const { formErrors } = this.state;
        return (
            <div className="Register">
                <div className="forma-registro">
                    <h1 className="titulo">Crear cuenta</h1>

                    <form className="forma" onSubmit={this.handleSubmit} noValidate>

                        <div className="nombres">
                            <label className="level-nombre" htmlFor="nombres">Nombre</label>
                            <input
                                type="text"
                                name="nombres"
                                className={formErrors.nombres.length > 0 ? "error" : null} placeholder="Ingresar nombres y apellidos"
                                noValidate
                                onChange={this.handleChange} />
                        </div>

                        {formErrors.nombres.length > 0 && (
                            <span className="errorMessage">{formErrors.nombres}</span>
                        )}

                        <div className="documento">
                            <label htmlFor="documento">Documento</label>
                            <input
                                type="text"
                                name="documento"
                                className={formErrors.documento.length > 0 ? "error" : null} placeholder="Numero de identificación"
                                noValidate
                                onChange={this.handleChange} />
                        </div>

                        {formErrors.documento.length > 0 && (
                            <span className="errorMessage">{formErrors.documento}</span>
                        )}

                        <div className="edad">
                            <label htmlFor="edad">Edad</label>
                            <input
                                type="number"
                                min="0"
                                name="edad"
                                className={formErrors.edad.length > 0 ? "error" : null}
                                placeholder="Ingresar edad"
                                noValidate
                                onChange={this.handleChange} />
                        </div>

                        {formErrors.edad.length > 0 && (
                            <span className="errorMessage">{formErrors.edad}</span>
                        )}

                        <div className="genero">
                            <label htmlFor="genero">Genero</label>
                            <select id="genero" name="generos">
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>

                        <div className="correo">
                            <label htmlFor="correo">Correo</label>
                            <input
                                type="email"
                                name="correo"
                                className={formErrors.correo.length > 0 ? "error" : null}
                                placeholder="Correo electrónico"
                                noValidate
                                onChange={this.handleChange} />
                        </div>

                        {formErrors.correo.length > 0 && (
                            <span className="errorMessage">{formErrors.correo}</span>
                        )}

                        <div className="contrasena">
                            <label htmlFor="contrasena">Contraseña</label>
                            <input
                                type="password"
                                name="contrasena"
                                className={formErrors.contrasena.length > 0 ? "error" : null}
                                placeholder="Ingresar contraseña"
                                noValidate
                                onChange={this.handleChange} />
                        </div>

                        {formErrors.contrasena.length > 0 && (
                            <span className="errorMessage">{formErrors.contrasena}</span>
                        )}

                        <a href='/registro' className="createAccount">Crear cuenta</a>

                        <a href='/' className="volver">Volver</a>

                    </form>
                </div>
            </div>
        );
    }

}

export default RegisterPage;