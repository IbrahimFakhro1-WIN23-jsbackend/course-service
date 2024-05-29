const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('App prepared, starting server...');
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    console.log(`Received request for ${parsedUrl.pathname}`);

    // Health check endpoint
    if (parsedUrl.pathname === '/health') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
      return;
    }

    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      return;
    }
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
}).catch(err => {
  console.error('Error during app preparation:', err);
});
