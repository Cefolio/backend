// /register and /login

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require ('../users/users-model');

router.post('/register', (req, res) => {
  let user = req.body;
  
  const hash = bcrypt.hashSync(user.password, 10);
user.password = hash;

  User.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch( err => {
      res.status(500).json({
        err, 
      message: "error, not working"
      });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.headers;
  User.findBy({ username, password })
  .first()
    .then(user => {

      if(user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          message: `Welcome ${user.username}!`
        });
      } else {
        res.status(401).json({
          message: 'Invalid Credentials'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: 'Opps, something went wrong...'
      });
    });
});

module.exports = router;