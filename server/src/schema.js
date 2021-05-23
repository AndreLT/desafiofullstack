const { gql } = require("apollo-server");
const { GraphQLScalarType } = require("graphql");

const typeDefs = gql`
  scalar Date

  type Question {
    title: String
    owner: Owner!
    link: String!
    score: Int
    answers: Int
    creationDate: Date
    tags: [String]!
  }

  type Owner {
    image: String
    name: String
    link: String
  }

  type Query {
    questions(score: Int, sort: String, limit: Int, tag: String): [Question]
  }
`;

const dateScalar = new GraphQLScalarType({
  name: "Date",
  serialize(value) {
    return value.getTime();
  },
  parseValue(value) {
    return new Date(value);
  },
});

module.exports = typeDefs;
