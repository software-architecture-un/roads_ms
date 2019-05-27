import React from 'react';
import '../styles/LoginPage.css';

function LoginPage() {
  return (
    <div className="LoginPage">
      <header className="LoginPage-header">   
        <h1>Login Here</h1>  
        <form>
            {/**USERNAME */}
            <label for= "username">Username</label>
            <input type="text" placeholder="Enter Username"/>

            {/**PASSWORD  */}
            <label for= "password">Password</label>
            <input type="password" placeholder="Enter Password"/>

            <input type= "submit" value="Log In"/> 

            <a href= "#">Lost your password</a>
            <a href= "#">Don't have an account?</a>

        </form>   
      </header>    
    </div>    
  );
}

export default LoginPage;