import { dynamoDb, promisify } from "../../utils";

const deleteTodo = (_, { id }) => {
  const params = {
    TableName: "todosTable",
    Key: {
      id: id,
    },
  };

  return promisify((callback) => {
    dynamoDb.delete(params, callback);
  }).then((result: any) => {
    if (!result) {
      return {
        message: "Couldn't create the todo item",
      };
    }
    return {
      message: `Todo item deleted:'${id}'`,
    };
  });
};

export { deleteTodo };
