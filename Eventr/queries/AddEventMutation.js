import gql from "graphql-tag";

export default gql`
  mutation CreateEvent(
    $name: String
    $description: String
    $start: String
    $end: String
  ) {
    createEvent(
      input: {
        name: $name
        description: $description
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
