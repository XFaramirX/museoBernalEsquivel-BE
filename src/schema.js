import { makeExecutableSchema } from "@graphql-tools/schema";
import { apiTypeDefs, apiResolvers } from "../api/main.js";

const schema = makeExecutableSchema({
  typeDefs: apiTypeDefs,
  resolvers: apiResolvers,
});

export default schema;
