import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import MainPage from './LandigPage/MainPage';
import AllUsers from './endpoints/users/AllUsers';
import AllPlaces from './endpoints/places/AllPlaces';
import UserById2 from './endpoints/users/UserById2';

const client = new ApolloClient({
  uri: 'http://192.168.99.101:5500/graphql'
});

// const App = () => (
//   <ApolloProvider client={client}>
//     <div>
//       <h2>Mi primer aplicacion apollo en react</h2>
//     </div>
//   </ApolloProvider>
// )

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>Mi primer aplicacion apollo en react</h2>
          <h1>TODOS LOS USUARIOS</h1>
          {/* <AllUsers/> */}
          <h1>USUARIO POR ID</h1>
          <UserById2/>          
        </div>
      </ApolloProvider>
      {/* <MainPage /> */}
    </div>
  );
}

export default App;