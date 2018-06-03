import gql from "graphql-tag";

export default gql`
  mutation CreateEvent(
    $id: ID!
    $name: String!
    $description: String
    $location: String
    $start: String
    $end: String
  ) {
    createEvent(
      input: {
        id: $id
        name: $name
        description: $description
        location: $location
        start: $start
        end: $end
      }
    ) {
      id
      name
      location
      description
      start
      end
    }
  }
`;
