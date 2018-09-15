import React from "react";
import ReactDOM from "react-dom";
import GithubSearchApp from "./components/GithubSearchApp";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div id="app">
      <GithubSearchApp />
    </div>
  );
}

ReactDOM.render(<App />, root);
