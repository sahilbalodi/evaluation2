const Hapi = require('hapi');
// const Inert = require('inert');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8070 || process.argv[2]),
});
server.route({
  path: '/',
  method: 'POST',
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

