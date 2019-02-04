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

/* Routes declarations */
app.use('/api/users', usersRoutes);


module.exports = app;
