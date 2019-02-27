import {gql} from 'apollo-server';

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
    id: Int
    name: String!
    description: String
    location: String
    start: String
    end: String
    author: User
  }
  type Query {
    events: [Event]
    event(id: Int): Event
    user(authToken: String): User
  }
  type Mutation {
    saveEvent(
      id: Int
      name: String
      description: String
      location: String
      start: String
      end: String
    ): Event
    registerUser(phoneNumber: String!): Boolean
    authenticateUser(phoneNumber: String!, registrationToken: String!): String
  }
`;

export default [typeDefs];



