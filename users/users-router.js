const express = require('express');
const router = express.Router();

const dbUser = require('./users-model');

const authRequire = require('../auth/auth-required-middleware');


router.get('/', authRequire, (req, res) => {
  dbUser.find()
    .then(user => {
      res.json(user)
    })
    .catch(err => {res.status(500).json({
      err,
      message: 'Failed to retrieve users'
    });
  });
});

module.exports = router;