import React from 'react';
import { request } from "graphql-request";

var resultado = {
    userById:{
        content : {
            name:'',
            document:0,
            age:0,
            email:'',
            password_digest:''
        },
        message:''
    }
}

const query = `
    {
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
  .then(UserById2)
  .catch(console.error);



function UserById2(resultado) {
    // return resultado.userById.map(({ content, message }) => (
    //     <div>
    //       <p>{console.message}</p>

    //     </div>
    //   ));
    console.log(resultado);
    var map = resultado.userById.map(x=>{
        return x.message;
    })
    // var map = new Map(Object.entries(resultado));
    console.log(map); // Map { foo: "bar", baz: 42
    // console.log(typeof(resultado.userById));
}

export default UserById2;