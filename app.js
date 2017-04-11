/**
 * Created by Jefferson on 11/04/2017.
 */
var app = require("./config/application");
var cliente = require('./app/routes/cliente');


app.get('/',function(req, res){
    res.end("Servidor ok");
});

app.use('/cliente' , cliente);