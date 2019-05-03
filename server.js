const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://fdo14:password1@ds149146.mlab.com:49146/bstool", {
    useNewUrlParser: true
  })
  .then(() => console.log("DB connected!"))
  .catch(err => console.log(err));

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Listening on ${url}`);
});
