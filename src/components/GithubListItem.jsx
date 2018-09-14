import React from "react";

class GithubListItem extends React.Component {
  render() {
    //console.log(props);
    const { id, login, html_url, avatar_url } = this.props.githubItem;
    console.log("rendering list items", login);
    return (
      <li key={id} className="github-list-item">
        <a href={html_url} target="_blank">
          <p>{login}</p>
          <img src={avatar_url} className="user-avatar" alt="user-avatar" />
        </a>
      </li>
    );
  }
}

export default GithubListItem;
