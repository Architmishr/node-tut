"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <h3>We can't seem to find the page you're looking for</h3>
  <a href='/'>Back to Home page</a>
  `);
});

server.listen(5000);
