const { RESTDataSource } = require("apollo-datasource-rest");

class SOQuestionsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.stackexchange.com/2.2/";
  }

  async getQuestions({ score, sort, limit, tag }) {
    const response = await this.get("questions", {
      min: score,
      sort,
      pagesize: limit,
      tagged: "javascript".concat(tag),
      site: "stackoverflow",
    });
    return Array.isArray(response.items)
      ? response.items.map((question) => this.questionReducer(question))
      : [];
  }

  questionReducer(question) {
    return {
      title: question.title,
      link: question.link,
      score: question.score,
      answers: question.answer_count,
      creationDate: question.creation_date,
      tags: question.tags,
      owner: {
        image: question.owner.profile_image,
        name: question.owner.display_name,
        link: question.owner.link,
      },
    };
  }
}

module.exports = SOQuestionsAPI;
