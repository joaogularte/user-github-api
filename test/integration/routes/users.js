/* Integration testing to users route */
describe('Routes Users', () => {
  /* Testing the route GET /api/users?since={number} */
  describe('Route GET /api/users?since={number}', () => {
    it('should return a list of users', (done) => {
      request
        .get('/api/users')
        .end((err, res) => {
          expect(res.body.data[0]).to.have.property('login');
          expect(res.body.data[0]).to.have.property('id');
          expect(res.body.data[0]).to.have.property('url');
          expect(res.body.data[0]).to.have.property('type');
          done(err);
        });
    });
  });

  /* Testing the route GET /api/users/:username/details */
  describe('Route GET /api/users/:username/details', () => {
    it('should return user informations', (done) => {
      request
        .get('/api/users/joaogularte/details')
        .end((err, res) => {
          expect(res.body.data).to.have.property('login');
          expect(res.body.data).to.have.property('id');
          expect(res.body.data).to.have.property('url');
          expect(res.body.data).to.have.property('type');
          expect(res.body.data).to.have.property('name');
          done(err);
        });
    });
  });

  /* Testing the route GET /api/users/:username/repos */
  describe('Route GET /api/users/:username/repos', () => {
    it('should return user repos', (done) => {
      request
        .get('/api/users/joaogularte/repos')
        .end((err, res) => {
          expect(res.body.data[0]).to.have.property('id');
          expect(res.body.data[0]).to.have.property('name');
          expect(res.body.data[0]).to.have.property('full_name');
          expect(res.body.data[0]).to.have.property('html_url');
          done(err);
        });
    });
  });
});
