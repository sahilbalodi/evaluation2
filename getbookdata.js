const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8090,
});
server.route({
  path: '/',
  method: 'GET',
  handler: (request, response) => {
    response('hey');
  },
});
if (!module.parent) {
  server.start((error) => {
    if (error) { throw error; }
    console.log('server started');
  });
}
module.exports = server;
