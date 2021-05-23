import React, { useState } from "react";

function App() {
  const [tag, setTag] = useState("");
  const [limit, setLimit] = useState("");
  const [score, setScore] = useState("");
  const [sort, setSort] = useState("");

  const handleSubmit = (event) => {
    alert(
      "Tag: " +
        tag +
        " - Limit: " +
        limit +
        " - Score: " +
        score +
        " - Sort: " +
        sort
    );
    event.preventDefault();
  };
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-4xl py-3 font-mono italic">StackOverflow</h1>
      <div className="bg-gray-300 py-4 px-5 rounded-md shadow-md overflow-hidden">
        <h2 className="text-2xl font-mono font-medium italic text-gray-500">
          Buscar na API
        </h2>
        <form onSubmit={(e) => handleSubmit(e)} className="flex space-x-9">
          <label className="flex flex-col">
            Tag:
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Limit:
            <input
              type="text"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Score:
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Sort:
            <input
              type="text"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            />
          </label>
          <input type="submit" value="Buscar" />
        </form>
      </div>
    </div>
  );
}

export default App;
