const express = require('express');
const router = express.Router();
const ifnotLogin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.render('home', {test: ''});
    }
    next();
}

module.exports = ifnotLogin;