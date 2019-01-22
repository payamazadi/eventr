import {gql} from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

//TODO: how to tie these properly to G Data store IDs? Or use our own always?..
//TODO: String or Date?..
//TODO: auditentry required (!) ?
const typeDefs = gql`
  type User {
    authToken: String!
    registrationToken: Int!
    phoneNumber: String!
    firstName: String
    lastName: String
    audit: [AuditEntry]!
    deleted: Boolean
    email: String
    avatar: String
    settings: String
  }

  type Event {
    id: Int!
    name: String!
    description: String
    location: String
    start: String!
    end: String!
    author: User!
    hosts: [User]
    additionalInfo: String
    parentEvent: Event
    options: String
    special: Boolean
    audit: [AuditEntry]!
    deleted: Boolean
    weather: String
  }

  type AuditEntry{
    parent: String
    dateCreated: Date
    field: String
    oldValue: String
    newValue: String
    message: String
    actor: User
  }

  type EventBlast {
    event: Event!
    sender: User!
    message: String!
    seen [User]
    deleted: Boolean
  }

  type EventInvites {
    event: Event!
    invitee: User!
    status: Int!
    audit: [AuditEntry]!
    deleted: Boolean
  }

  type EventList {
    event: Event!
    creator: User!
    sharedWith: [User]
    type: Int
    visibility: Int
    name: String
    seen: [User]
    contents: [EventItem]
    audit: [AuditEntry]!
    deleted: Boolean
  }

  type EventItem {
    list: EventList!
    creator: User
    assigned: [User]
    seen: [User]
    deadline: Date
    name: String
    description: String
    quantity: Int
    cost: Double
    completed: Boolean
    deleted: Boolean
  }

  type Post {
    event: Event!
    parent: Post
    creator: User
    likes: Int
    seen: [User]
    audit: [AuditEntry]!
    deleted: Boolean
  }

  type Notifications {
    blast: EventBlast
    creator: User
    event: Event
    object: String
    audit: [AuditEntry]
    dateCreated: Date
    type: Int
    remoteObjectId: String
  }

  type GroupChat {
    attendees: [User]
    audit: [AuditEntry]
  }

  type Feedback {
    creator: User
    message: String
    audit: [AuditEntry]
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
