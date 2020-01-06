const morgan = require('morgan');
const statusMonitor = require('express-status-monitor');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(statusMonitor());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (_req, res) => {
  res.render('index', {
    websocketHost: process.env.WEBSOCKET_HOST || 'ws://localhost:3002',
    websocketPath: process.env.WEBSOCKET_PATH || '/socket.io',
  });
});

app.listen(port, () => {
  console.log('Listening on *:%s', port);
});

module.exports = app;
