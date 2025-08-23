const bcrypt = require('bcrypt');
const cone = require('../data-connect');
const insertUser = (user, pass, role, lastname, email) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(pass, 10, (err, hashpass)=> {
            cone.execute('insert into user (username, password, role) value (?, ?, ?)', [user, hashpass, role]).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    })
    
}


module.exports = {insertUser};