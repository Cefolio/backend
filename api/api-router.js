const express = require('express');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "Welcome to Build Week Unit 4" });
});

module.exports = router;