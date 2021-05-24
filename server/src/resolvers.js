module.exports = {
  Query: {
    questions: (
      _,
      { score = 0, sort = "votes", limit = 10, tag = "javascript" },
      { dataSources }
    ) => dataSources.questionsAPI.getQuestions({ score, sort, limit, tag }),
  },
};
