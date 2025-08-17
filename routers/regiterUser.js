const express = require('express');
const router = express.Router();
const {insertUser} = require('../database/sql/insertUser');

router.post('/regiter', (req, res) => {
    const {username, password} = req.body;
    insertUser(username, password, 'user', cone);
    res.redirect('/');
});

module.exports = router;