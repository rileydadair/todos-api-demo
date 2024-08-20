import { dynamoDb, promisify } from "../../utils";

export const todo = (_, { id }) => {
  return promisify((callback) => {
    dynamoDb.get(
      {
        TableName: "todosTable",
        Key: { id: id },
      },
      callback
    );
  }).then((result: any) => {
    if (!result.Item) {
      return id;
    }
    return result.Item;
  });
};
