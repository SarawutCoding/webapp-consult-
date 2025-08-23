const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000
}));

app.use(express.static(path.join(__dirname,'public')));
// login
const ifnotLogin = require('./script/loginUser')

app.get('/', ifnotLogin, (req, res) => {
    res.render('home');
});

// register
const regiterUser = require('./routers/registerUser')
app.use('/register', regiterUser);

app.listen(3000, () => {
    console.log('Server start 3000');
});