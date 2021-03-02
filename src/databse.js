const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
});

mysqlConnection.connect(function (error){
    if (error) {
        console.log(error);
        return;
    } else {
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;