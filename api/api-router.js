const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ api: "It's alive!...It 's AIIVEEEE" });
});

module.exports = router;