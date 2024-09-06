import { dynamoDb, promisify } from "../../utils";

const updateTodo = (_, { id, text, checked }) => {
  const timestamp = new Date().getTime();

  const params = {
    TableName: "todosTable",
    Key: {
      id: id,
    },
    ExpressionAttributeNames: {
      "#todo_text": "text",
    },
    ExpressionAttributeValues: {
      ":text": text,
      ":checked": checked,
      ":updatedAt": timestamp,
    },
    UpdateExpression:
      "SET #todo_text = :text, checked = :checked, updatedAt = :updatedAt",
    ReturnValues: "ALL_NEW",
  };

  return promisify((callback) => {
    dynamoDb.update(params, callback);
  }).then((result: any) => {
    if (!result) {
      return {
        message: "Couldn't update the todo item",
      };
    }
    return {
      message: `Todo item updated: '${text}' checked - ${checked}`,
    };
  });
};

export { updateTodo };
