import { dynamoDb, promisify } from "../../utils";

export const todos = (_) => {
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
