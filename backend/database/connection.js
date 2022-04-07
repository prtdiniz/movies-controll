const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'prtdiniz',
    password: 'teste12345',
    database: 'movies-controll'
})

module.exports = Connection;
