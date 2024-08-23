import { create } from "./mutations";
import { todo, todos } from "./queries";

const resolvers = {
  Mutation: {
    create: create,
  },
  Query: {
    hello: () => "Hello world!",
    todo: todo,
    todos: todos,
  },
};

export { resolvers };
