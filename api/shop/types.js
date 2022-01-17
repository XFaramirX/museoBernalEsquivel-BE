import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    shop: [Book]
  }
`;

export default typeDefs;
