const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('Next.js app is ready'); // Log when app is prepared
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    console.log(`Handling request for ${parsedUrl.pathname}`); // Log each incoming request
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) {
      console.error('Error starting server:', err); // Log server startup errors
      throw err;
    }
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
}).catch((err) => {
  console.error('Error during app preparation:', err); // Log preparation errors
});
