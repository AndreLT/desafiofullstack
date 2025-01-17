import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { cache } from "./cache";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
