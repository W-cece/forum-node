const mysql = require('mysql2/promise');

//创建连接
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'forum',
    charset: 'utf8mb4',
})

module.exports = pool;