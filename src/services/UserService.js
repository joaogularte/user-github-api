const GitHubApi = require('../external_api/GitHubApi');

class UserService {
  /**
   * Return a list of users from GitHub
   */
  static async list(number) {
    const users = await GitHubApi.list(number);
    return users.data;
  }

  /**
   * Return information about a specified user if exists
   * if not exists retun null
   */
  static async getUser(username) {
    try {
      const user = await GitHubApi.getUser(username);
      return user.data;
    } catch (err) {
      return null;
    }
  }

  /**
   * Return a list public repositories for the specified user if exists
   * if not exists return null
   */
  static async getUserRepo(username) {
    try {
      const userRepos = await GitHubApi.getUserRepo(username);
      return userRepos.data;
    } catch (err) {
      return null;
    }
  }
}

module.exports = UserService;
