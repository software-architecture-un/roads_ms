import React from 'react';
import { request } from "graphql-request";

const query = `
    query {
        userById(id: 1) {
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
`;

request("http://192.168.99.101:5500/graphql", query)
  .then(console.log)
  .catch(console.error);

function UserById2() {
    return (
        <div className="UserById2">
            <p>componente 2 usuario por id</p>                     
        </div>
    );
}

export default UserById2;