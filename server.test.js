// const Hapi = require('hapi');
// const server = require('./server.js');
//
// describe('test for server ', () => {
//   test('server.js should return a server object', () => {
//     expect(server).toBeInstanceOf(Hapi.Server);
//   });
// });
// describe('server ', () => {
//   test('server responds to the post request', (done) => {
//     const req = {
//       method: 'POST',
//       url: '/',
//       payload: JSON.stringify({ name: 'abcdefghi' }),
//     };
//     server.inject(req, (response) => {
//       expect(response.result).toBe('hey');
//       done();
//     });
//   });
// });
// describe('server ', () => {
//   test('server responds to the post request with statusCode 200', (done) => {
//     const req = {
//       method: 'POST',
//       url: '/',
//       payload: JSON.stringify({ name: 'abcdefghi' }),
//     };
//     server.inject(req, (response) => {
//       expect(response.statusCode).toBe(200);
//       done();
//     });
//   });
// });
// describe('server ', () => {
//   test('server responds to the post request with statusCode 404 if path is incorrect', (done) => {
//     const req = {
//       method: 'POST',
//       url: '/abcd',
//       payload: JSON.stringify({ name: 'abcdefghi' }),
//     };
//     server.inject(req, (response) => {
//       expect(response.statusCode).toBe(404);
//       done();
//     });
//   });
//   test('server responds to the post request with statusCode 404 if get request is sent', (done) => {
//     const req = {
//       method: 'GET',
//       url: '/',
//     };
//     server.inject(req, (response) => {
//       expect(response.statusCode).toBe(404);
//       done();
//     });
//   });
// });
