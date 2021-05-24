import React, { useState } from "react";

const ParameterInputs = (props) => {
  const [tag, setTag] = useState("");
  const [limit, setLimit] = useState(null);
  const [score, setScore] = useState(null);
  const [sort, setSort] = useState("");
  const [error, setError] = useState(false);

  const isInteger = (value) => {
    const converted = parseInt(value);
    if (Number.isInteger(converted) && converted > 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    if (tag !== "") {
      if (isInteger(limit) && isInteger(score)) {
        setError(false);
        props.setter({
          tag: "javascript;".concat(tag),
          limit: parseInt(limit),
          score: parseInt(score),
          sort,
        });
      } else {
        setError("Limit e Score devem ser inteiros e maiores que zero");
      }
    } else {
      setError("Tag é um campo obrigatório");
    }
    event.preventDefault();
  };

  return (
    <div className="bg-gray-300 py-4 px-5 shadow-md overflow-hidden">
      <h2 className="text-2xl font-mono font-medium italic text-gray-500">
        Buscar na API
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <div className="flex justify-between">
          <label className="block font-mono text-gray-500 font-semibold">
            Tag
            <input
              className="block w-60 p-1 px-2"
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </label>
          <label className="block font-mono text-gray-500 font-semibold">
            Limit
            <input
              className="block w-60 p-1 px-2"
              type="text"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
          </label>
          <label className="block font-mono text-gray-500 font-semibold">
            Score
            <input
              className="block w-60 p-1 px-2"
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </label>
          <label className="block font-mono text-gray-500 font-semibold">
            Sort
            <select
              className="block appearance-none w-60 p-1 px-2"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="activity">Activity</option>
              <option value="votes">Votes</option>
              <option value="creation">Creation</option>
              <option value="hot">Hot</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </label>
        </div>
        {error ? (
          <div className="px-3 py-1 my-2 border-white rounded-md bg-red-500 text-white">
            {error}
          </div>
        ) : null}
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
