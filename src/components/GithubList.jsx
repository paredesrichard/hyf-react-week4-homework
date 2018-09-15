import React from "react";
import GithubListItem from "./GithubListItem";

function GithubList(props) {
    //console.log("githublist props",props);
    const { githubData } = props;
    return (
      <div className="github-list">
        <ul>
          {githubData.map(github => (
            <GithubListItem key={github.id} githubItem={github} />
          ))}
        </ul>
      </div>
    );
  }

export default GithubList;
