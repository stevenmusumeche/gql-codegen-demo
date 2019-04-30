import gql from "graphql-tag";

export const GET_AUTHORS_QUERY = gql`
  query GetAuthors {
    getAuthors {
      ...AuthorsFields
    }
  }

  fragment AuthorsFields on Author {
    id
    firstName
    lastName
    books {
      title
      categories {
        name
      }
    }
  }
`;
