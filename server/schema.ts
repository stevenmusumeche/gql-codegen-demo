import gql from "graphql-tag";

export const schema = gql`
  type Query {
    getBook(id: ID!): Book
    getBooks: [Book!]!
    getAuthor(id: ID!): Author
    getAuthors: [Author!]!
  }
  type Book {
    id: ID!
    title: String!
    author: Author!
    isbn: String
    categories: [Category!]!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    books: [Book!]!
  }
  type Category {
    id: ID!
    name: String!
    books: [Book!]!
  }
`;
