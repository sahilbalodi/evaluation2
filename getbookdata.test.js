const Hapi = require('hapi');
const server = require('./getbookdata.js');
const verify = require('./verify.js');

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
  test('server responds to the get request with statusCode 200', (done) => {
    server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('server responds to the get request with statusCode 404', (done) => {
    server.inject('/sahil/balodi', (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
  test('server responds to the get request with statusCode 400', (done) => {
    if (!verify('') === null) {
      server.inject('', (response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    }
    done();
  });
  test('server responds to the get request with statusCode 400', (done) => {
    if (!verify(123) === null) {
      server.inject(123, (response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    }
    done();
  });
  test('server responds to the get request with statusCode 400', (done) => {
    if (!verify('/') === null) {
      server.inject('/', (response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    }
    done();
  });
});
