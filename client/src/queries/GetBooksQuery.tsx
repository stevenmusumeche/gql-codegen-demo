import gql from "graphql-tag";

export const GET_BOOKS_QUERY = gql`
  query GetBooks {
    getBooks {
      ...BookFields
    }
  }

  fragment BooksFields on Book {
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
