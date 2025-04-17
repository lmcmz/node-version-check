#!/usr/bin/env node

// Immediately log Node.js version information
console.log('====================================');
console.log('Node.js Version Check for MCP Server');
console.log('====================================');
console.log(`Node Version: ${process.version}`);
console.log(`Processors: ${require('os').cpus().length}`);
console.log(`Architecture: ${process.arch}`);
console.log(`Platform: ${process.platform}`);
console.log(`MCP Environment: Yes`);
console.log('====================================');

// Exit after logging
process.exit(0);