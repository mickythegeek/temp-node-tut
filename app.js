const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home page");
  } else if (req.url === "/about") {
    res.end("Here is a piece of our history!");
  } else {
    res.end(`
    <h1>Sorry!</h1>
    <p>We could find the page you're looking for.</p>
    <a href = '/'>Go back Home. </a>
    `);
  }
});

server.listen(5000);
