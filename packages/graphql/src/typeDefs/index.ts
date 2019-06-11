import {gql} from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type User {
    authToken: String!
    registrationToken: String!
    phoneNumber: String!
    firstName: String
    lastName: String
  }
  type Event {
    id: ID
    name: String!
    description: String
    location: String
    start: String
    end: String
    author: User
  }
  type List {
    id: Int!
  }
  type Query {
    events: [Event]
    event(id: ID): Event
    user(authToken: String): User
    list(id: Int): List
  }
  type Mutation {
    saveEvent(
      id: ID
      name: String
      description: String
      location: String
      start: String
      end: String
    ): Event
    registerUser(phoneNumber: String!): User
    tokenizeUser(phoneNumber: String!, registrationToken: String!): User
  }
`;

export default [typeDefs];



