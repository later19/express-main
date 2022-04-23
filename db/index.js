const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'c123456',
    database:'my_schema'
})

module.exports=db