import React from "react";

class GithubListItem extends React.Component {
  render() {
    console.log(this.props);
    const { id, login, html_url, avatar_url, repos_url } = this.props.githubItem;
    //console.log("rendering list items", login);
    return (
      <li key={id} className="github-list-item">
        <a href={html_url} target="_blank">
          <img src={avatar_url} className="user-avatar" alt="user-avatar" onClick={() => alert(login)} />
          <p>{login}</p>
        </a>
        <span>Repo: <a href={repos_url}>{repos_url}</a></span>
      </li>
    );
  }
}

export default GithubListItem;
