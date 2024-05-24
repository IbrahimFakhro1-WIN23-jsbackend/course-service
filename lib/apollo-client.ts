import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5001/graphql', // URL till din GraphQL-server
    credentials: 'include', // Detta säkerställer att cookies skickas med förfrågan
  }),
  cache: new InMemoryCache(),
});

export default client;
