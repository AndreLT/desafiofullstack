import React, { useState } from "react";

import ParameterInputs from "./components/ParameterInputs";
import Questions from "./components/Questions";

function App() {
  const [query, setQuery] = useState(null);

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-4xl py-3 font-mono italic">StackOverflow</h1>
      <ParameterInputs setter={(value) => setQuery(value)} />
      {query ? <Questions queryInfo={query} /> : null}
    </div>
  );
}

export default App;
