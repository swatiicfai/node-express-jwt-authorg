const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}. This is a protected route!` });
});

module.exports = router;
