/* eslint-disable import/first */

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 */

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Author = {
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  books: Array<Book>;
};

export type Book = {
  id: Scalars["ID"];
  title: Scalars["String"];
  author: Author;
  isbn?: Maybe<Scalars["String"]>;
  categories: Array<Category>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Category = {
  id: Scalars["ID"];
  name: Scalars["String"];
  books: Array<Book>;
};

export type Query = {
  getBook?: Maybe<Book>;
  getBooks: Array<Book>;
  getAuthor?: Maybe<Author>;
  getAuthors: Array<Author>;
};

export type QueryGetBookArgs = {
  id: Scalars["ID"];
};

export type QueryGetAuthorArgs = {
  id: Scalars["ID"];
};

export type GetAuthorsQueryVariables = {};

export type GetAuthorsQuery = { __typename?: "Query" } & {
  getAuthors: Array<{ __typename?: "Author" } & AuthorsFieldsFragment>;
};

export type AuthorsFieldsFragment = { __typename?: "Author" } & Pick<
  Author,
  "id" | "firstName" | "lastName"
> & {
    books: Array<
      { __typename?: "Book" } & Pick<Book, "title"> & {
          categories: Array<
            { __typename?: "Category" } & Pick<Category, "name">
          >;
        }
    >;
  };

export type GetBookQueryVariables = {
  id: Scalars["ID"];
};

export type GetBookQuery = { __typename?: "Query" } & {
  getBook: Maybe<{ __typename?: "Book" } & BookFieldsFragment>;
};

export type BookFieldsFragment = { __typename?: "Book" } & Pick<
  Book,
  "id" | "title" | "isbn"
> & {
    author: { __typename?: "Author" } & Pick<Author, "firstName" | "lastName">;
    categories: Array<
      { __typename?: "Category" } & Pick<Category, "id" | "name">
    >;
  };

export type GetBooksQueryVariables = {};

export type GetBooksQuery = { __typename?: "Query" } & {
  getBooks: Array<{ __typename?: "Book" } & BookFieldsFragment>;
};

export type BooksFieldsFragment = { __typename?: "Book" } & Pick<
  Book,
  "id" | "title" | "isbn"
> & {
    author: { __typename?: "Author" } & Pick<Author, "firstName" | "lastName">;
    categories: Array<
      { __typename?: "Category" } & Pick<Category, "id" | "name">
    >;
  };

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export const AuthorsFieldsFragmentDoc = gql`
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
export const BookFieldsFragmentDoc = gql`
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
export const BooksFieldsFragmentDoc = gql`
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
export const GetAuthorsDocument = gql`
  query GetAuthors {
    getAuthors {
      ...AuthorsFields
    }
  }
  ${AuthorsFieldsFragmentDoc}
`;

export class GetAuthorsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAuthorsQuery, GetAuthorsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAuthorsQuery, GetAuthorsQueryVariables>
        query={GetAuthorsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export const GetBookDocument = gql`
  query GetBook($id: ID!) {
    getBook(id: $id) {
      ...BookFields
    }
  }
  ${BookFieldsFragmentDoc}
`;

export class GetBookComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetBookQuery, GetBookQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetBookQuery, GetBookQueryVariables>
        query={GetBookDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export const GetBooksDocument = gql`
  query GetBooks {
    getBooks {
      ...BookFields
    }
  }
  ${BookFieldsFragmentDoc}
`;

export class GetBooksComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetBooksQuery, GetBooksQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetBooksQuery, GetBooksQueryVariables>
        query={GetBooksDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
