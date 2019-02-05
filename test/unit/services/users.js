const UserService = require('../../../src/services/UserService');

/* Unit testing to users services */
describe('Services Users', () => {
  /* Testing the list method of Userservice */
  describe('Get a list of users: list(number)', () => {
    it('should return a list of users', async () => {
      const users = await UserService.list(0);
      expect(users).to.be.array();
    });
  });

  /* Testing the getUser method of Userservice */
  describe('Get information of user: getUser(username)', () => {
    it('should return user information', async () => {
      const user = await UserService.getUser('joaogularte');
      expect(user).to.be.an('object');
    });
  });

  /* Testing the getUserRepo method of Userservice */
  describe('Get the repositories of user: getUserRepo(username)', () => {
    it('should return user repos', async () => {
      const userRepo = await UserService.getUserRepo('joaogularte');
      expect(userRepo).to.be.array();
    });
  });
});
