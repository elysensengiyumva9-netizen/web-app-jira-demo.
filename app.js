// Import built-in HTTP module
const http = require('http');

// Set server port
const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/plain" });

  // Homepage route
  if (req.url === "/") {
    res.end("Welcome to the Web App Jira Demo Homepage!");
  }
  // About page route
  else if (req.url === "/about") {
    res.end("This is the About page of your Node.js app without Express.");
  }
  // Default 404
  else {
    res.writeHead(404);
    res.end("404 - Page not found");
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

