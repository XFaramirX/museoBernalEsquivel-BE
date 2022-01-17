import homepage from "../api/homepage/index.js";
import blog from "../api/blog/index.js";
import shop from "../api/shop/index.js";

const apiTypeDefs = [homepage.typeDef, blog.typeDef, shop.typeDef];
const apiResolvers = [homepage.resolvers, blog.resolvers, shop.resolvers];

export { apiTypeDefs, apiResolvers };
