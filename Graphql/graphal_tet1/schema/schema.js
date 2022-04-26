const graphql = require("graphql");
const _ = require("lodash");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var books = [
  { name: "a", genre: "aa", id: "1", price: "2" },
  { name: "b", genre: "bb", id: "2", price: "40" },
  { name: "c", genre: "cc", id: "3", price: "400" },
  { name: "d", genre: "dd", id: "4", price: "4000" },
];
var author = [
  { name: "ab", age: "1", id: "1", price: "21" },
  { name: "bc", age: "22", id: "2", price: "401" },
  { name: "cd", age: "44", id: "3", price: "4001" },
  { name: "de", age: "33", id: "4", price: "40001" },
];

const booktype = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});

const authortype = new GraphQLObjectType({
  name: "author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: booktype,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: authortype,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(author, { id: args.id });
      },
    },
  }),
});

//
module.exports = new GraphQLSchema({
  query: RootQuery,
});
