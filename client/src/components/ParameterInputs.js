import React, { useState } from "react";

const ParameterInputs = (props) => {
  const [tag, setTag] = useState("");
  const [limit, setLimit] = useState("");
  const [score, setScore] = useState("");
  const [sort, setSort] = useState("");

  const handleSubmit = (event) => {
    props.setter({ tag, limit, score, sort });
    event.preventDefault();
  };

  return (
    <div className="bg-gray-300 py-4 px-5 rounded-md shadow-md overflow-hidden">
      <h2 className="text-2xl font-mono font-medium italic text-gray-500">
        Buscar na API
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <div className="flex justify-between">
          <label className="">
            Tag:
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </label>
          <label
            className="
            "
          >
            Limit:
            <input
              type="text"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
            />
          </label>
          <label className="">
            Score:
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(parseInt(e.target.value))}
            />
          </label>
          <label className="">
            Sort:
            <input
              type="text"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            />
          </label>
        </div>
        <input
          className="my-3 py-1 px-7 text-white rounded-sm border-b-2 border-button-dark bg-button-light self-end"
          type="submit"
          value="Buscar"
        />
      </form>
    </div>
  );
};

export default ParameterInputs;
