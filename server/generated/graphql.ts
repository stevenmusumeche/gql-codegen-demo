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

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  Context = any,
  Args = {
    maxAge?: Maybe<Maybe<Scalars["Int"]>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type AuthorResolvers<Context = any, ParentType = any> = {
  id?: Resolver<any, ParentType, Context>;
  firstName?: Resolver<any, ParentType, Context>;
  lastName?: Resolver<any, ParentType, Context>;
  books?: Resolver<Array<any>, ParentType, Context>;
};

export type BookResolvers<Context = any, ParentType = any> = {
  id?: Resolver<any, ParentType, Context>;
  title?: Resolver<any, ParentType, Context>;
  author?: Resolver<any, ParentType, Context>;
  isbn?: Resolver<Maybe<any>, ParentType, Context>;
  categories?: Resolver<Array<any>, ParentType, Context>;
};

export type CategoryResolvers<Context = any, ParentType = any> = {
  id?: Resolver<any, ParentType, Context>;
  name?: Resolver<any, ParentType, Context>;
  books?: Resolver<Array<any>, ParentType, Context>;
};

export type QueryResolvers<Context = any, ParentType = any> = {
  getBook?: Resolver<Maybe<any>, ParentType, Context, QueryGetBookArgs>;
  getBooks?: Resolver<Array<any>, ParentType, Context>;
  getAuthor?: Resolver<Maybe<any>, ParentType, Context, QueryGetAuthorArgs>;
  getAuthors?: Resolver<Array<any>, ParentType, Context>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["Upload"], any> {
  name: "Upload";
}

export type Resolvers<Context = any> = {
  Author?: AuthorResolvers<Context>;
  Book?: BookResolvers<Context>;
  Category?: CategoryResolvers<Context>;
  Query?: QueryResolvers<Context>;
  Upload?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = any> = Resolvers<Context>;
export type DirectiveResolvers<Context = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, Context>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<Context = any> = DirectiveResolvers<Context>;
