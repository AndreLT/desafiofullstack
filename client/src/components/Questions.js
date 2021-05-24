import React from "react";
import { gql, useQuery } from "@apollo/client";
import ScaleLoader from "react-spinners/ScaleLoader";

import Question from "./Question";

const Questions = (props) => {
  const GET_QUESTIONS = gql`
    query GetQuestions($score: Int, $sort: String, $limit: Int, $tag: String!) {
      questions(score: $score, sort: $sort, limit: $limit, tag: $tag) {
        title
        link
        score
        answers
        creationDate
        tags
        owner {
          image
          name
          link
        }
      }
    }
  `;

  const response = useQuery(GET_QUESTIONS, {
    variables: { ...props.queryInfo },
  });

  return response.data ? (
    <div className="flex flex-col mb-20">
      {response.data.questions.length ? (
        response.data.questions.map((question) => (
          <Question key={question.creationDate} {...question} />
        ))
      ) : (
        <div className="text-center text-2xl text-white rounded-md my-2 px-2 py-5 bg-gray-400">
          Nenhum resultado encontrado :(
        </div>
      )}
    </div>
  ) : (
    <div className="flex justify-center mt-5">
      <ScaleLoader color="#f48024" size={200} />
    </div>
  );
};

export default Questions;
