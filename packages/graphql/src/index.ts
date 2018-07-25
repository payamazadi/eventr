import {ApolloServer, gql} from 'apollo-server';
import uuidv1 from 'uuid/v1';

const users = []

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
  
  type User {
    authToken: String!
    registrationToken: Int!
    phoneNumber: String!
    firstName: String
    lastName: String
  }

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
    user(authToken:String): User
  }

  type Mutation {
    saveEvent(id:Int 
      name: String
      description: String
      location: String
      start: String
      end: String): Event
    registerUser(phoneNumber:String!):Int
    authenticateUser(phoneNumber: String!, registrationToken: Int!):String
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    events: (_, {}, {user}) => user?events.map((event,id) => ({id, ...event})):[],
    event: (_, {id},{user}) => user?(events[id] && {id, ...events[id]}):{},
    user: (_, {},{user}) => user?users.find(u => u.authToken === user.authToken):{}
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
    },
    registerUser: (_, {phoneNumber}) => {
      const userIndex = users.findIndex(user => user.phoneNumber === phoneNumber);
      const registrationToken = Math.floor(Math.random()*90000)+10000
      if(userIndex >= 0)
      {
        users[userIndex].registrationToken = registrationToken;
        
      }
      else{
        users.push({registrationToken, phoneNumber});
        
      }
      return registrationToken //@todo have this send an SMS to the phone number rather than responding with the token here
    },
    authenticateUser: (_, {phoneNumber, registrationToken}) => {
      const userIndex = users.findIndex(user => user.phoneNumber === phoneNumber && user.registrationToken === registrationToken)
      if(userIndex >= 0)
      {
        const authToken = uuidv1() //@todo use a better version of uuid here
        users[userIndex].authToken = authToken;
        return authToken
      }
      else{
        return {} //@todo return some kind of graphql error here because that user isn't authenticated
      }
    }
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({typeDefs, resolvers, context: ({req})=>{
  const token = req.headers.authorization || '';

  const user = users.find(user => user.authToken === token);
  console.log(token, user);
  return {user}
}});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
