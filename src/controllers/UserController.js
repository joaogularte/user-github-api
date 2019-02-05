const UserService = require('../services/UserService');

const errorResponse = { success: false, message: 'Internal server failure' };

class UserController {
  /**
   * Return a list of users from GitHub
   */
  static async list(req, res) {
    try {
      const number = req.joi.query.since;
      const users = await UserService.list(number);
      const nextNumber = users[users.length - 1].id;
      res.set('Link', `<http://localhost:3000/api/users?since=${nextNumber}>; rel="next"`);
      res.status(200).send({ success: true, data: users });
    } catch (err) {
      res.status(500).send(errorResponse);
    }
  }

  /**
   * Return information about a specified user if username exists
   * if username not exists return User not found
   */
  static async getUser(req, res) {
    try {
      const username = req.joi.params.username;
      const user = await UserService.getUser(username);
      if (user) {
        res.status(200).send({ success: true, data: user });
      } else {
        res.status(200).send({ success: false, message: 'User not found' });
      }
    } catch (err) {
      res.status(500).send(errorResponse);
    }
  }

  /**
   * Return a list public repositories for the specified user if username exists
   * if username not exists return User not found
   */
  static async getUserRepo(req, res) {
    try {
      const username = req.joi.params.username;
      const userRepo = await UserService.getUserRepo(username);
      if (userRepo) {
        res.status(200).send({ success: true, data: userRepo });
      } else {
        res.status(200).send({ success: false, message: 'User not found' });
      }
    } catch (err) {
      res.status(500).send(errorResponse);
    }
  }
}

module.exports = UserController;
