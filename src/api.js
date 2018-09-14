export function fetchGithub(searchKeyword) {
  const url = `https://api.github.com/search/users?q=${searchKeyword}`;
  return fetch(url).then(response => response.json());
}