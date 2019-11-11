module.exports.usuario = function(usuario1, pass, conn){
    const busca = 'select * from usuario';
    conn.query(busca,function(error, results, fields){
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