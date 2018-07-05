import {ApolloServer, gql} from 'apollo-server';

const events = [{
  name: "Test",
  description: "Test",
  location: "Test",
  start: "2018-06-27T04:01:00.000Z",
  end: "2018-06-27T04:01:00.000Z"
}]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  
  type Event {
    id: Int!
    name: String!
    description: String
    location: String
    start: String
    end: String
  }

  type Query {
    events: [Event]
    event(id: Int): Event
  }

  type Mutation {
    saveEvent(id:Int 
      name: String
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
    events: () => events.map((event,id) => ({id, ...event})),
    event: (_, {id}) => (events[id] && {id, ...events[id]})
  },
  Mutation: {
    
    saveEvent: (_, { id, name = "Unnamed Event", description, location, start, end }:{id:string; name:string; description:string; location:string; start: string; end:string}) => {
      if(events[id])
      {
        const updates = { id, name, description, location, start, end };
        for (let prop in updates) {
          !updates[prop] && delete updates[prop]
        }
        events[id] = { ...events[id], ...updates }
        return {id, ...events[id]}
      }
      else{
        events.push({ name, description, location, start, end })
        return { id, ...{ name, description, location, start, end }}
      }
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
