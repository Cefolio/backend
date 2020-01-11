// /register and /login

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('./config/secrets');

const User = require ('../users/users-model');

const router = express.Router();

router.post('/register', (req, res) => {
  let user = req.body;
  
  const hash = bcrypt.hashSync(user.password, 10);
user.password = hash;

console.log(user);

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
  let { username, password } = req.body;
  User.findBy({ username })
  .first()
    .then(user => {
      
      if(user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
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

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '8h'
  };
  return jwt.sign(payload, secret.jwtSecret, options)
};

module.exports = router;