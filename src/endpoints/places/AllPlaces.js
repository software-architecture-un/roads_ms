import React from 'react';
import {Query} from 'react-apollo';
import gpl from 'graphql-tag';

const AllPlaces = () => (
  <Query query={gpl`
    {
        allScoreResources {
            name
        }
    }
  `}>
    {({loading, error, data})=>{
      if(loading) return <p>Cargando...</p>;
      if(error) return <p>Error :(</p>;
      return data.allScoreResources.map(({name})=>(
        <div key={name}>
          <p>{`nombre lugar: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
)

export default AllPlaces;