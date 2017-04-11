/**
 * Created by Jefferson on 11/04/2017.
 */
var app = require("./config/application");
var clienteRoutes = require('./app/routes/cliente');
var usuarioRoutes = require('./app/routes/usuario');


app.get('/',function(req, res){
    res.end("Servidor ok");
});

app.use('/cliente' , clienteRoutes);
app.use('/usuario' , usuarioRoutes);