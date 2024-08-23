export const Query = `
  type Query {
    hello: String
    todo(id: ID!): Todo!
    todos: [Todo]
  }
`;
