import React from 'react';
import '../styles/LoginPage.css';

function LoginPage() {
  return (
    <div className="LoginPage">
      <header className="LoginPage-header">   
        <h1>Iniciar Sesión</h1>  
        <form>
            {/**USERNAME */}
            <label htmlFor= "email">Correo electrónico</label>
            <input type="text" placeholder="Ingresar correo"/>

            {/**PASSWORD  */}
            <label htmlFor= "password">Contraseña</label>
            <input type="password" placeholder="Ingresar contraseña"/>

            <input className="btn-login" type= "submit" value="Acceder"/> 
            <input className="btn-volver" type= "submit" value="Volver"/>

            {/** <a href= "#">Lost your password</a>
            <a href= "#">Don't have an account?</a>*/}

        </form>   
      </header>    
    </div>    
  );
}

export default LoginPage;