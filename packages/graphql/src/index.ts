import {ApolloServer, gql} from 'apollo-server';

const events = [{
  name: "Test",
  description: "Test",
  location: "Test",
  start: "2018/06/27",
  end: "2018/06/28"
}]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  
  type Event {
    name: String
    description: String
    location: String
    start: String
    end: String
  }

  type Query {
    event(id: Int): Event
  }

  type Mutation {
    addEvent(name: String
    description: String
    location: String
    start: String
    end: String): Event
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    event: (_, {id}) => events[id]
  },
  Mutation: {
    addEvent: (_, {name, description, location, start, end}) => {
      events.push({ name, description, location, start, end })
      return ({ name, description, location, start, end })
    }
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({typeDefs, resolvers});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
