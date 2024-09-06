import { dynamoDb, promisify } from "../../utils";

const todos = (_) => {
  return promisify((callback) => {
    dynamoDb.scan(
      {
        TableName: "todosTable",
      },
      callback
    );
  }).then((result: any) => {
    if (!result.Items) {
      return [];
    }
    return result.Items;
  });
};

export { todos };
