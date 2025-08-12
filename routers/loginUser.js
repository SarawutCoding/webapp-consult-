const ifnotLogin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        res.render('home')
    }
    next();
}

module.exports = ifnotLogin;