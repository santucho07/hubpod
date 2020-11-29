/* eslint-disable no-console */
import '@babel/polyfill';

const http = require('http');

const requestHandler = (req, res) => {
  res.writeHeader(200, { ContentType: 'text/plain' });
  res.end('Hello World my friends!!!')
}

const server = http.createServer(requestHandler);

server.listen(8080, () => {
  console.log('Listen on http://localhost:8080');
});
