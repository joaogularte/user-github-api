/* Lib to .env */
require('dotenv').config();

/* Dependencies */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');

/* Routes */
const usersRoutes = require('./routes/user');

/* Express app initialization */
const app = express();

/* Express utilities */
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json({
    limit: process.env.BODY_LIMIT_SIZE
}));

/* Routes declarations */
app.use('/api/users', usersRoutes);
app.all('*', (req, res) => {
  res.status(400).send({
    success: false,
    status: '404',
  });
});

module.exports = app;
