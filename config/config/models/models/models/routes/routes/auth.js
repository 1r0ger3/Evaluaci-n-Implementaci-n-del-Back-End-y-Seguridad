const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 8);
  const user = await User.create({ email: req.body.email, password: hashedPassword });
  res.json(user);
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
