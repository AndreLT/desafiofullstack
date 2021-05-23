const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const SOQuestionsAPI = require("./datasources/questions");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    questionsAPI: new SOQuestionsAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`
    Running...
    Listening on pport 4000
    Access at ${url}
  `);
});
