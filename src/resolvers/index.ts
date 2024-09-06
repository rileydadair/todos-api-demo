import { createTodo, deleteTodo, updateTodo } from "./mutations";
import { todo, todos } from "./queries";

const resolvers = {
  Mutation: {
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
  },
  Query: {
    todo: todo,
    todos: todos,
  },
};

export { resolvers };
