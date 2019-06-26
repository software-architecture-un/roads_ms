import React, {Component} from 'react';
import IpGraphql from '../conection/IpGraphql';

class UserPage extends Component {

  state = {
    email:'jjmuesesq@unal.edu.co',    
    nombre: "",
    id:"",
    documento:"",
    edad:""   
  }

  componentWillMount(){
    // let jwt = window.localStorage.getItem('jwt');
    const query = `
      mutation {
        userByEmail(email:
        {
            email: "${this.state.email}"
            
        })
        {
        content
        {
            id
            name
            document
            age
            email
            password_digest
        }
        message
        status
        }
      }
  `;

    const url = IpGraphql;
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
  
    fetch(url, opts)
      .then(res => res.json(), console.log("PRIMERO YO"))
      .then(res => {
        // this.setState({data: res})
        const nombre = res.data.userByEmail.content.name;
        this.setState({nombre: nombre})

        const id = res.data.userByEmail.content.id;
        this.setState({id: id})

        const documento= res.data.userByEmail.content.document;
        this.setState({documento: documento})

        const edad = res.data.userByEmail.content.age;
        this.setState({edad: edad})           
        
      }, console.log("SEGUNDO YO"))
      .catch(console.error);
  }

  render(){
    return (
      <div className="UserPage2">
        <h1>Prueba usuario logueado</h1>

        <input value={this.state.email}/>        
        <br/>
        <input value={this.state.nombre}/>       
        <br/>
        <input value={this.state.edad}/>        
        <br/>
        <input value={this.state.documento}/>
        <br/>
        <input value={this.state.id}/>
        <br/>        

      </div>
    );
  }
}

export default UserPage;