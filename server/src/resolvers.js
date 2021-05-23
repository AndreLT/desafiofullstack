module.exports = {
  Query: {
    questions: (
      _,
      { score = 0, sort = "votes", limit = 10, tag },
      { dataSources }
    ) => dataSources.questionsAPI.getQuestions({ score, sort, limit, tag }),
  },
};
