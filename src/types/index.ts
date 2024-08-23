import { gql } from "apollo-server-lambda";

import { Todo } from "./todo";
import { Message } from "./message";
import { Mutation } from "./mutation";
import { Query } from "./query";

const typeDefStrings = [Todo, Message, Mutation, Query];

const typeDefs = typeDefStrings.map((typeDef) => gql(typeDef));

export { typeDefs };
