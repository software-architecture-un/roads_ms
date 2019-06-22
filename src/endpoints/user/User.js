import React, {Component} from 'react';

class User extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount

    render(){
        return(
            <label>Componente user by Id {this.props.name}</label>
        );
    }
}
export default User;