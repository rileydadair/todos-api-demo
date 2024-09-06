import { ApolloServer, gql } from "apollo-server-lambda";
import { typeDefs } from "./types";
import { resolvers } from "./resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default apolloServer.createHandler();
