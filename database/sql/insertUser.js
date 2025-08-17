const insertUser = (user, pass, role, cone) => {
    cone.execute('insert into user (username, password, role) value (?, ?, ?)', [user, pass, role]);
    return 'สมัครเสร็จสิ้น';
}

const loginsql = (user, pass, cone) => {
    return 0;    
}

module.exports = {insertUser, loginsql};