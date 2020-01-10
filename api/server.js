const express = require('express');

const apiRouter = require('./api-router');

const configureMiddleware = require('./configureMiddleware');

const server = express();

configureMiddleware(server);

// server.use(express.json());
server.use('/api', apiRouter);

module.exports = server;