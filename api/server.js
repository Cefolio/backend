const express = require('express');
const server = express();

server.get("/", (req, res) => {
    try {
      res.send(`༼ つ ^_^ ༽つ
                ☆*: .｡. o bring me the horizon o .｡.:*☆`);
    } catch (error) {
      res.status(500).json(error.response);
    }
});

module.exports = server;