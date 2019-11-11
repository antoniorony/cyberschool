//importando o express
const express = require('express');
// definido a porta
const port = 3000;
//instanciamos uma aplicação express - assim poderemos usar
///os comando do express
const app = express();
// requires do path
const path = require('path');

var bodyParser     =        require("body-parser");
//let pega = require('./config/pegaDados.js')
// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.render('index',{
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
    /* if (req.method === 'POST') {
        collectRequestData(req, result => {
        	//pega(result.email, result.senha);
            console.log(result);
            res.end(`Parsed data belonging to ${result.email}`);
        });
    } */

});
app.get('/curriculo',(req, res, next) => {
    res.render('curriculo');
});

app.post('handle',function(request,response){
var query1=request.body.var1;
var query2=request.body.var2;
});

app.post('/',function(req,res){
  var user_name=req.body.email;
  var password=req.body.senha;
  console.log("User name = "+user_name+", password is "+password);
 // pega(user_name, password);
  res.end("yes");
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
    
});
