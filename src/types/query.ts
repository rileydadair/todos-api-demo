export const Query = `
  type Query {
    todo(id: ID!): Todo!
    todos: [Todo]
  }
`;
