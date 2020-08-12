/* eslint-disable no-console */
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = express();

// Init middlewares
app.use(helmet());
app.use(morgan('combined'));
app.use(compression());

// Accept json and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes / endpoints for REST
// Serving static files?
//app.use(express.static(path.join(process.cwd(), 'files')));
require('./routes/routes.js')(app);

app.listen({ port: 5000 }, () => {
  console.log(`🚀 Server ready at http://localhost:5000`);
});
