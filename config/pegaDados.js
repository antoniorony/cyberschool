var conexao = require('./config/dbconection.js');

module.exports.pega = function(usuario, senha) {
    const busca = 'select * from usuario';
    conexao.query(busca,function(error, results, fields){
        if (error) {
            console.log(erro);
        }else{
            console.log(results);
            Object.keys(results).forEach(function(key) {
                var row = results[key];
                if(row.user == usuario1){
                    console.log('logado');
                }
                //console.log(row.user);
            })
        }
    })
}