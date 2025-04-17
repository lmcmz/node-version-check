#!/usr/bin/env node

// Just print version info and exit
console.log(JSON.stringify({
  nodeVersion: process.version,
  platform: process.platform,
  arch: process.arch
}, null, 2));

// Create an empty server to keep the process running
// This is often necessary for MCP to capture output
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Node.js Version: ' + process.version);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});