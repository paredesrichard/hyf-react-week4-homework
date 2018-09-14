import React from "react";
import GithubList from "./GithubList";
import { fetchGithub } from "../api";

class GithubSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: "", githubs: [] };
    this.search = this.search.bind(this);
  }

  search() {
    const searchKeyword = this.state.searchKeyword;
    if (searchKeyword === "") {
      this.setState({ githubs: [] });
      return;
    }
    fetchGithub(this.state.searchKeyword).then(body => {
      this.setState({ githubs: body.items, searchKeyword: "" });
    });
  }

  render() {
    const { searchKeyword, githubs } = this.state;
    return (
      <div className="gitMain">
        <div className="search">
          <p>Search for Github User</p>
          <input
            placeholder="enter git user name here"
            onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}
          />
          <button onClick={this.search}>Search</button>
          <GithubList githubs={githubs} />
        </div>
      </div>
    );
  }
}

export default GithubSearch;
