// using express server
const express = require('express');
const server = express();
// imports
const cors = require('cors');
const helmet = require('helmet')
const logger = require('../flavors/logger')
const morgan = require('morgan')
require('dotenv').config();

// middleware
// for functioning with APPLICATIONS 
server.use(cors());
// for security
server.use(helmet());
// for logs
server.use(morgan("dev"));
server.use(logger);

// setting my data to be sent as json
server.use(express.json());

// ROUTES
const user = require('./rout/user_router');
server.use('/users', user);

// server welcome message
server.get("/", (req, res) => {
    try {
      res.send(`༼ つ ^_^ ༽つ
                ☆*: .｡. o bring me the horizon o .｡.:*☆`);
    } catch (error) {
      res.status(500).json(error.response);
    }
});

module.exports = server;