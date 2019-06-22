import React from 'react';
import {Query} from 'react-apollo';
import gpl from 'graphql-tag';

function UserById() {
  return (
    <div className="UserById">

      <Query
          query={gpl`
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
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.userById.message.map(({ message }) => (
              <div key={message}>
               
              </div>
            ));
          }}
        </Query>
     
    </div>
  );
}

export default UserById;

