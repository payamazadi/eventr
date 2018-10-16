import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {AsyncStorage} from 'react-native';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
});

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const authKey = await AsyncStorage.getItem('authorization');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: authKey
    }
  };
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});