#!/usr/bin/env node

// Use a child process to run node -v
const { execSync } = require('child_process');

try {
  // Execute node -v and capture the output
  const nodeVersion = execSync('node -v').toString().trim();
  const npmVersion = execSync('npm -v').toString().trim();
  
  console.log('====================================');
  console.log('Node.js Version Check for MCP Server');
  console.log('====================================');
  console.log(`Node Version: ${nodeVersion}`);
  console.log(`NPM Version: ${npmVersion}`);
  console.log(`Process Version: ${process.version}`);
  console.log(`Environment: MCP`);
  console.log('====================================');
  
  // Write to stdout directly
  process.stdout.write(`NODE_VERSION=${nodeVersion}\n`);
} catch (error) {
  console.error('Error checking Node.js version:', error);
  process.exit(1);
}

// Exit successfully
process.exit(0);