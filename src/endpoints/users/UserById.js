import React from 'react';
import {Query} from 'react-apollo';
import gpl from 'graphql-tag';

function UserById() {
  return (
    <div className="UserById">

      <Query
          query={gpl`
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
          `}
        >
          {({ loading, error, data: {userById:{content}} }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
              
              {content.map(user => (
                <li key={user.name}>{user.name} {user.document}</li>
              ))}
              
          }}
        </Query>
     
    </div>
  );
}

export default UserById;

