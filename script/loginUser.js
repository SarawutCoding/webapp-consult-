const ifnotLogin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.render('login-register', {test: ''});
    }
    next();
}

module.exports = ifnotLogin;