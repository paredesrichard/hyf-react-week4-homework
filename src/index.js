import React from "react";
import ReactDOM from "react-dom";
import GithubSearch from "./components/GithubSearch";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div id="app">
      <GithubSearch />
    </div>
  );
}

ReactDOM.render(<App />, root);
