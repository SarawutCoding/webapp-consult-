const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000
}));

const cone = require('./database/data-connect');

app.use(express.static(path.join(__dirname,'public')));
// login
const ifnotLogin = require('./routers/loginUser')
app.get('/', ifnotLogin, (req, res) => {
    res.render('home', {test: 'ใช้ได้'});
});
const {insertUser} = require('./database/sql/insertUser');

app.post('/regiter', (req, res) => {
    const {username, password} = req.body;
    insertUser(username, password, 'user', cone);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server start 3000');
});