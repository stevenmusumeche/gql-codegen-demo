import gql from "graphql-tag";

export const GET_BOOK_QUERY = gql`
  query GetBook($id: ID!) {
    getBook(id: $id) {
      ...BookFields
    }
  }

  fragment BookFields on Book {
    id
    title
    isbn
    author {
      firstName
      lastName
    }
    categories {
      id
      name
    }
  }
`;
