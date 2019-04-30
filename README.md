Demo project to demonstrate TypeScript code generation from a GraphQL schema. To run the code generator, first run the server:

```
cd ./server
npm start
```

Then, in a different terminal:

```
npm run gql-gen
```

The generated files for the server are at `server/generated/graphql.ts` and the generated files for the frontend, including react-apollo components are at `client/src/generated/graphql.tsx`.
