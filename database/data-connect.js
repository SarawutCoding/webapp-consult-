const mysql = require('mysql2');

const cone = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'111960Za_Yao',
    database:'webapp_consult'
}).promise();

module.exports = cone;