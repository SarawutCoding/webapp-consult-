const ifnotLogin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.render('login-register');
    }
    next();
}

module.exports = ifnotLogin;