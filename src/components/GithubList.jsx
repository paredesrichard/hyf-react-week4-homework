import React from "react";
import GithubListItem from "./GithubListItem";

class GithubList extends React.Component {
  render() {
    const { githubs } = this.props;
    return (
      <div className="github-list">
        <ul>
          {githubs.map(github => (
            <GithubListItem githubItem={github} />
          ))}
        </ul>
      </div>
    );
  }
}

export default GithubList;
