'use strict';

const morgan = require('morgan');
const statusMonitor = require('express-status-monitor');
const express = require('express');

// Initialize Express.js
const app = express();

app.use(morgan('dev'));
app.use(statusMonitor());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (_req, res) => {
  res.render('index', {
    websocketHost: process.env.WEBSOCKET_HOST || 'ws://localhost:3001',
    websocketPath: process.env.WEBSOCKET_PATH || '/socket.io',
  });
});

// Expose server
app.listen(3000, () => {
  console.log('Listening on *:3000');
});

module.exports = app;
