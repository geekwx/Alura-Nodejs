const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '172.17.0.2',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao