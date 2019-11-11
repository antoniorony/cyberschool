 module.exports.insert = function(conn) {
    const sql = 'insert into usuario(user, senha) values("rony", "admin")';
    conn.query(sql, function(error, results, fields) {
        if(error) return console.log('erro');
        console.log('dados inseridos com sucesso');
    })
}

