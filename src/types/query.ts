import { gql } from "apollo-server-lambda";

export const query = gql`
  type Query {
    todo(id: ID!): Todo!
  }
`;
