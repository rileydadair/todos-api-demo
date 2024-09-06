import AWS from "aws-sdk";

// AWS config for local development...

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export { dynamoDb };
