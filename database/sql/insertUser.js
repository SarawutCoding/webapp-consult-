const bcrypt = require('bcrypt');
const cone = require('../data-connect');
const insertUser = (user, pass, role, lastname, email) => {
    bcrypt.hash(pass, 10, (err, hashpass) => {
        if (err) {
            console.error("Error hashing password:", err);
            return;
        }

        cone.execute('insert into user (username, password, role) values (?, ?, ?)', [user, hashpass, role], (err, result) => {
            if (err) {
                console.error("Error inserting into user:", err);
                return;
            }

            // ตรวจสอบว่าการแทรกข้อมูลสำเร็จและมี insertId
            if (result && result.insertId) {
                const userId = result.insertId;
                cone.execute('insert into userDetail (userID, firstname, lastname, email) values (?, ?, ?, ?)', [userId, user, lastname, email], (err, detailResult) => {
                    if (err) {
                        console.error("Error inserting into userDetail:", err);
                        return;
                    }
                    console.log("User and userDetail inserted successfully!");
                });
            } else {
                console.error("Failed to get insertId from user table.");
            }
        });
    });
};


module.exports = {insertUser};