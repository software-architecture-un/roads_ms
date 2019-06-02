import React, {Component} from 'react';
import '../styles/RegisterPage.css';


class RegisterPage extends Component {
  render(){
    return (
      <div className="Register">
        <div className="forma-registro">
          <h1 className="titulo">Crear cuenta</h1>
          <form className="forma" onSubmit={this.handleSubmit} noValidate>
            <div className="nombres">
              <label className="level-nombre" htmlFor="nombres">Nombre</label>
              <input type="text" name="nombres" className="Nombres" placeholder="Ingresar nombres y apellidos"  noValidate onChange={this.handleChange}/>
            </div>

            <div className="documento">
              <label htmlFor="documento">Documento</label>
              <input type="text" name="documento" className="Documento" placeholder="Numero de identificación"  noValidate onChange={this.handleChange}/>
            </div>

            <div className="edad">
              <label htmlFor="edad">Edad</label>
              <input type="number" min="0" name="edad" className="Edad" placeholder="Ingresar edad"  noValidate onChange={this.handleChange}/>
            </div>

            <div className="genero">
            <label htmlFor="genero">Genero</label>
              <select id="genero" name="generos">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>                
              </select>
            </div>

            <div className="correo">
              <label htmlFor="correo">Correo</label>
              <input type="email" name="correo" className="Correo" placeholder="Correo electrónico" noValidate onChange={this.handleChange}/>
            </div>           

            <div className="contrasena">
              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" name="contraseña" className="Contrasena" placeholder="Ingresar contraseña" noValidate onChange={this.handleChange}/>
            </div>

            <div className="createAccount">
              <button type="submit">Crear cuenta</button>              
            </div>

            <div className="volver">
              <button type="submit">volver</button>              
            </div>
  
          </form>
        </div>       
      </div>
    );
  }
 
}

export default RegisterPage;
