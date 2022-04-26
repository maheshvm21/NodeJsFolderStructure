const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const { graphql } = require('graphql');

const schema = require("./schema/schema");
const app = express();
const port = 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`server running on ${port} port`);
});
