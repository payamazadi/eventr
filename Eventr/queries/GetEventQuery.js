import gql from "graphql-tag";

export default gql`
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      location
      description
      start
      end
    }
  }
`;
