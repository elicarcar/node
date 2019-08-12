'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  // TODO: Write your homework code here
  let state = 10;
  const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    if (request.url == '/reset') {
      state = 10;
      return;
    } else if (request.url == '/add') {
      state++;
    } else if (request.url == '/subtract') {
      state--;
    } else {
      new Error('error: not found');
    }

    response.statusCode = 404;
    response.end('not found');
  });

  server.listen(port, '127.0.0.1');
  return server;
}

module.exports = {
  createServer,
};
