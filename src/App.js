import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import MainPage from './LandigPage/MainPage';
import AllUsers from './enpoints/AllUsers';

const client = new ApolloClient({
  uri: 'http://35.232.93.124:5500/graphql'
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
          <AllUsers/>
        </div>
      </ApolloProvider>
      {/* <MainPage /> */}
    </div>
  );
}

export default App;