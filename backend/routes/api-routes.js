const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "supersecretjwtlol";

router.post('/signup', async (req, res) => {
    const { name, username, weight, email, password } = req.body;
    const saltPassword = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, saltPassword);
    const newUser = await User.create({ name, username, weight, email, password: hashedPassword})
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(err));

    const token = jwt.sign({ email: newUser.email, id: newUser._id}, jwtSecret, { expiresIn: "1h"});
    res.status(200).json({ result: newUser, token});
});

// router.post('/signin', )

module.exports = router;