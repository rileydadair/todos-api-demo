import { gql } from "apollo-server-lambda";

// type Todo = {
//   id: String;
//   text: String;
//   checked: Boolean;
//   created: Number;
//   updatedAt: Number;
// };

export const todo = gql`
  type Todo {
    id: String
    text: String
    checked: Boolean
    created: Int
    updatedAt: Int
  }
`;
