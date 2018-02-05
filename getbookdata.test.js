const Hapi = require('hapi');
const server = require('./getbookdata.js');

describe('test for server getbookdata ', () => {
  test('server.js should return a server object', () => {
    expect(server).toBeInstanceOf(Hapi.Server);
  });
});
describe('server getbookdata ', () => {
  test('server responds to the get request', (done) => {
    server.inject('/', (response) => {
      expect(response.result).toBe('hey');
      done();
    });
  });
});
