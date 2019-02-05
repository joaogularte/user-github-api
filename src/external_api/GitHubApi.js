/**
 *  Class with methods responsibles to request GitHub API
 */
const axios = require('axios');

class GitHubApi {
  /**
     * Return a list all users from GitHub,  in the order that they signed up on GitHub.
     */
  static list(n) {
    const url = `https://api.github.com/users?since=${n}`;
    return axios.get(url);
  }

  /**
     * Return publicly available information about someone with GitHub account
     */
  static getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    return axios.get(url);
  }

  /**
    * Return a list public repositories for the specified user.
    */
  static getUserRepo(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    return axios.get(url);
  }
}

module.exports = GitHubApi;
