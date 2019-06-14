import React from 'react';
import {Query} from 'react-apollo';
import gpl from 'graphql-tag';

const AllUsers = () => (
  <Query query={gpl`
    {
      allUsers {
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
  `}>
    {({loading, error, data})=>{
      if(loading) return <p>Cargando...</p>;
      if(error) return <p>Error :(</p>;
      return data.allUsers.content.map(({name, document, age, email, password_digest})=>(
        <div key={name}>
          <p>{`nombre: ${name} documento: ${document} edad: ${age} correo: ${email} password_digest: ${password_digest}`}</p>
        </div>
      ));
    }}
  </Query>
)

export default AllUsers;