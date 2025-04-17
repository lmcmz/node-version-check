#!/usr/bin/env node

const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Node.js Version Information:

Node Version: ${process.version}
Processors: ${os.cpus().length}
Architecture: ${process.arch}
Platform: ${process.platform}
MCP Environment: Yes
`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Node.js Version: ${process.version}`);
  console.log(`Running on port ${PORT}`);
});