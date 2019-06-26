import React, {Component} from 'react';
import DirectionGraphq from '../conection/IpGraphql';

class UserPlace extends Component { 
  state = {
    
  }

  handleClick = e =>{
    console.log('--> CREAR LUGAR')
    const query = `
      mutation {
        createScoreResource(scoreresource: {
          name: "${this.state.CampoNombre}"
          description: "${this.state.CampoDescripcion}"
          latitude: ${this.state.CampoLatitud}
          longitude: ${this.state.CampoLongitud}
          user_id: ${this.state.CampoIdUser}
      
        }) {
          _id
          name
          description
          latitude
          longitude
          user_id
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
    
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    })

  }

  render(){
    return (
      <div className= "UserTrails">
        <h1>CREAR LUGAR</h1>
        <label>Nombre</label>
        <input onChange={this.handleChange} name="CampoNombre" value={this.state.CampoNombre}/>        
        <br/>
        <br/>
        <label>Descripción</label>
        <input onChange={this.handleChange} name="CampoDescripcion" value={this.state.CampoDescripcion}/>       
        <br/>
        <br/>
        <label>Latitud</label>
        <input onChange={this.handleChange} name="CampoLatitud" value={this.state.CampoLatitud}/>        
        <br/>
        <br/>
        <label>Longitud</label>
        <input onChange={this.handleChange} name="CampoLongitud" value={this.state.CampoLongitud}/>
        <br/>
        <br/>
        <label>ID User</label>
        <input onChange={this.handleChange} name="CampoIdUser" value={this.state.CampoIdUser}/>

        <div>
            <button onClick={this.handleClick}>Crear Lugar</button>            
        </div>
        
      </div>
             
    );
  }
}

export default UserPlace;