module.exports = {
  Query: {
    questions: (_, __, { dataSources }) =>
      dataSources.questionsAPI.getQuestions(),
  },
};
