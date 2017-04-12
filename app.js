/**
 * Created by Jefferson on 11/04/2017.
 */
var app = require("./config/application");
var clienteRoutes = require('./app/routes/cliente');
var usuarioRoutes = require('./app/routes/usuario');
var auth = require('http-auth');

var basic = auth.basic({
		realm: "API sistema de atendimento",
        file: __dirname + "/config/data/users.htpasswd"
    }
);

app.get('/', auth.connect(basic) , function(req, res){
    res.end("Servidor ok");
});
  
app.use('/cliente', auth.connect(basic) , clienteRoutes);
app.use('/usuario', auth.connect(basic) , usuarioRoutes);