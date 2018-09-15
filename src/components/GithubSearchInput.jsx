import React from "react";

function GithubSearchInput(props) {
  return (
    <div className="search">
      <p>Search for Github User</p>
      <input
        type="text"
        placeholder="enter git user name here"
        onChange={e => {
          props.onChange(e.target.value);
        }}
        value={props.value}
      />
      <button onClick={props.onButtonClick}>Search</button>
    </div>
  );
}

export default GithubSearchInput;
