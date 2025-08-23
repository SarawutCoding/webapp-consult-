const express = require('express');
const router = express.Router();
const { insertUser } = require('../database/sql/insertUser');

router.post('/', (req, res) => {
    try {
        const { username, lastname, password, email } = req.body;
        insertUser(username, password, 'user', lastname, email);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        
    }

});

module.exports = router;