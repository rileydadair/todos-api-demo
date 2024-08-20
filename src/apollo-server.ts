import { ApolloServer, gql } from "apollo-server-lambda";
// const {
//   ApolloServerPluginLandingPageGraphQLPlayground,
// } = require("apollo-server-core");
import { todo } from "./resolvers/queries/todo";
import { todos } from "./resolvers/queries/todos";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Todo {
    id: String
    text: String
    checked: Boolean
    createdAt: Int
    updatedAt: Int
  }
  type Query {
    hello: String
    todo(id: ID!): Todo!
    todos: [Todo]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    todo: todo,
    todos: todos,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,

  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // install the Playground plugin and set the `introspection` option explicitly to `true`.
  // introspection: true,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export default apolloServer.createHandler();
