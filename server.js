const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('Next.js app is ready'); 
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    console.log(`Handling request for ${parsedUrl.pathname}`); 
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) {
      console.error('Error starting server:', err); 
      throw err;
    }
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
});
