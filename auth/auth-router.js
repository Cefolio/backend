// /register and /login

const express = require('express');
const router = express.Router();

const User = require ('../users/users-model');

router.post('/register', (req, res) => {
  let user = req.body;
  
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
  let { username, password } = req.headers;
  User.findBy({ username, password })
  .first()
    .then(user => {
      res.status(200).json({
        message: `Welcome ${user.username}!`
      })
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: 'Opps'
      });
    });
});

module.exports = router;