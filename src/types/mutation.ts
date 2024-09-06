export const Mutation = `
  type Mutation {
    createTodo(text: String!): Message!
    deleteTodo(id: String!): Message!
    updateTodo(id: String!, text: String!, checked: Boolean!): Message!
  }
`;
