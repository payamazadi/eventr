import React from 'react';

import {ApolloProvider} from 'react-apollo';


import Navigation from './Navigation';



import client from './ApolloClient';
 export default class App extends React.Component {
   
  render() {
    
    //@todo I have no idea why ApolloProvider is insisting that I proide it with that children prop ...
    return (
      <ApolloProvider client={client}> 
        <Navigation/>
      </ApolloProvider>
    );
  }
}

