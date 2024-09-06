import { dynamoDb, promisify } from "../../utils";
const uuid = require("uuid");

const createTodo = (_, { text }) => {
  const timestamp = new Date().getTime();

  const params = {
    TableName: "todosTable",
    Item: {
      id: uuid.v1(),
      text,
      checked: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  return promisify((callback) => {
    dynamoDb.put(params, callback);
  }).then((result: any) => {
    if (!result) {
      return {
        message: "Couldn't create the todo item",
      };
    }
    return {
      message: `Todo item created: '${text}'`,
    };
  });
};

export { createTodo };
