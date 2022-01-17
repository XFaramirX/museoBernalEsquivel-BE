import resolver from "../resolver.js";

let rootQuery = {};
const result = resolver.Query.blog(undefined, rootQuery);
test("Test", () => {
  console.log(result);
  expect(resolver).toBeDefined();
  expect(result[0].title).toBe("The Awakening");
});
