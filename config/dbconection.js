const mysql = require('mysql');
const inserir = require('./insertTable');
const valida = require('./validausuario');

const conexao = mysql.createConnection({
    'host':'localhost',
    'user':'root',
    'password':'admin',
    'database':'gestao'
});

conexao.connect(function(err) {
    if (err) {
        return console.log(err)
    }else{
        console.log("connect")
        valida.usuario('admin','admin',conexao);
    }

})

