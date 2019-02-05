const GitHubApi = require('../external_api/GitHubApi');

class GitHubService {
  /**
     * Return a list of users from GitHub
     */
  static async list(number) {
    const users = await GitHubApi.list(number);
    return users;
  }

  /**
    * Return information about a specified user
    */
  static async getUser(username) {
    const user = await GitHubApi.getUser(username);
    return user;
  }

  /**
    * Return a list public repositories for the specified user
    */
  static async getUserRepo(username) {
    const userRepos = await GitHubApi.getUserRepo(username);
    return userRepos;
  }
}

module.exports = GitHubService;
