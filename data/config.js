const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'Mald123.',
    database: 'api',
};

const pool = mysql.createPool(config);

module.exports = pool;