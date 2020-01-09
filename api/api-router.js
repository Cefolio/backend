const express = require('express');

const authRouter = require('../auth/auth-router');
// const usersRouter = require('../users/users-router');

const router = express.Router();

router.use('/auth', authRouter);
// router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive!...It 's AIIVEEEE" });
});

module.exports = router;