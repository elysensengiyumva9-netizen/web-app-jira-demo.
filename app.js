// Import built-in HTTP module
const http = require('http');

// Set the server port
const PORT = process.env.PORT || 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Default route
  if (req.url === "/") {
    res.end("Welcome to the Web App Jira Demo!");
  } else {
    res.end("Page not found");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

