const GitHubApi = require('../external_api/GitHubApi');

class UserService {
  /**
   * Return a list of users from GitHub
   */
  static async list(number) {
    const users = await GitHubApi.list(number);
    return users;
  }

  /**
   * Return information about a specified user if exists
   * if not exists retun null
   */
  static async getUser(username) {
    const user = await GitHubApi.getUser(username);
    if(!user.id){
      return null;
    }
    return user
  }

  /**
   * Return a list public repositories for the specified user if exists
   * if not exists return null
   */
  static async getUserRepo(username) {
    const userRepos = await GitHubApi.getUserRepo(username);
    if(!userRepos[0]){
      return null;
    }
    return userRepos;
  }
}

module.exports = UserService;
