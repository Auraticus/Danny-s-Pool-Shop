const express = require('express');
const path = require('path');
const shell = require('shelljs');
const fs = require('fs-extra');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const emailRouter = require('./routes/_email.router');
require('dotenv').config();

// Function to build the React app and move the dist folder
async function buildAndMoveDist() {
  console.log('Installing dependencies...');
  shell.cd('client');
  if (shell.exec('npm install').code !== 0) {
    shell.echo('Error: npm install failed');
    shell.exit(1);
  }

  console.log('Removing dist...');
  shell.rm('-rf', 'dist');  // This will work cross-platform

  console.log('Building the React app...');
  if (shell.exec('npm run build').code !== 0) {
    shell.echo('Error: React build failed');
    shell.exit(1);
  }
  shell.cd('..');

  console.log('Moving dist folder...');
  try {
    await fs.move('./client/dist', './dist', { overwrite: true });
    console.log('Successfully moved dist folder.');
  } catch (err) {
    console.error('Error moving dist folder:', err);
    shell.exit(1);
  }
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/sendEmail', emailRouter);
// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await buildAndMoveDist();
});
