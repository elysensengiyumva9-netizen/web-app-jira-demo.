// Import built-in HTTP module
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") {
    res.end("Welcome to the Web App Jira Demo Homepage! (WEB-123)");
  }
  else if (req.url === "/login") {
    res.end("Login Page - User authentication feature (WEB-124)");
  }
  else {
    res.writeHead(404);
    res.end("404 - Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

