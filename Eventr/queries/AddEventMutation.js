import gql from "graphql-tag";

export default gql`
  mutation CreateEvent(
    $name: String!
    $description: String
    $location: String
    $start: String
    $end: String
  ) {
    createEvent(
      input: {
        name: $name
        description: $description
        location: $location
        start: $start
        end: $end
      }
    ) {
      name
      location
      description
      start
      end
    }
  }
`;
