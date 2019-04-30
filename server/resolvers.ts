import { authors, books, categories } from "./database";
import { Resolvers, QueryGetBookArgs } from "./generated/graphql";

// Resolvers
export const resolvers: Resolvers = {
  Query: {
    getBook: (parent, args, ctx, info) =>
      books.find(book => book.id === args.id),
    getBooks: () => books,
    getAuthor: (parent, args, ctx, info) =>
      authors.find(author => author.id === args.id),
    getAuthors: () => authors
  },
  Book: {
    author: (book, args, ctx, info) => {
      return authors.find(author => author.id === book.authorId);
    },
    categories: (book, args, ctx, info) => {
      return categories.filter(category =>
        book.categoryIds.includes(category.id)
      );
    }
  },
  Author: {
    books: (author, args, ctx, info) => {
      return books.filter(book => book.authorId.includes(author.id));
    }
  },
  Category: {
    books: (category, args, ctx, info) => {
      return books.filter(book => book.categoryIds.includes(category.id));
    }
  }
};
