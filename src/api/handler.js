"use strict";

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
} = require("graphql");

const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const promisify = (foo) =>
  new Promise((resolve, reject) => {
    foo((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

const getTodo = (id) =>
  promisify((callback) =>
    dynamoDb.get(
      {
        TableName: "todosTable",
        Key: { id },
      },
      callback
    )
  ).then((result) => {
    if (!result.Item) {
      return id;
    }
    return result.Item;
  });

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: {
    id: { type: GraphQLString },
    text: { type: GraphQLString },
    checked: { type: GraphQLBoolean },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootGetType", // an arbitrary name
    fields: {
      // the query has a field called 'todo'
      todo: {
        // we need to know the todo ID
        args: { id: { name: "id", type: new GraphQLNonNull(GraphQLString) } },
        // the todo type
        type: TodoType,
        // resolve to a greeting message
        resolve: (parent, args) => getTodo(args.id),
      },
    },
  }),
});

// We want to make a GET request with ?query=<graphql query>
// The event properties are specific to AWS. Other providers will differ.
module.exports.query = (event, context, callback) =>
  graphql(schema, event.queryStringParameters.query).then(
    (result) =>
      callback(null, { statusCode: 200, body: JSON.stringify(result) }),
    (err) => callback(err)
  );
