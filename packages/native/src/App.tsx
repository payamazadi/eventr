import React from 'react';

import {ApolloProvider} from 'react-apollo';


import Navigation from './Navigation';



import client from './ApolloClient';
 export default class App extends React.Component {
   
  render() {
    return (
      <ApolloProvider client={client}> 
        <Navigation/>
      </ApolloProvider>
    );
  }
}

