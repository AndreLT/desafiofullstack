import React from "react";
import { gql, useQuery } from "@apollo/client";

const Questions = (props) => {
  const GET_QUESTIONS = gql`
    query GetQuestions($score: Int, $sort: String, $limit: Int, $tag: String!) {
      questions(score: $score, sort: $sort, limit: $limit, tag: $tag) {
        title
      }
    }
  `;
  const response = useQuery(GET_QUESTIONS, {
    variables: { ...props.queryInfo },
  });

  return response.data ? (
    <div>
      {response.data.questions.map((question) => (
        <h1>{question.title}</h1>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Questions;
