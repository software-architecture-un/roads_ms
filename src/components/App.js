import React from 'react';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
         
      <Link to= '/login'>Login</Link>
      <br/>
      <Link to= '/registro'>Crear cuenta</Link>
        
      {/* <Register/> */}
      {/* <LoginPage/> */}
        
    </div>
  );
}

export default App;
