/**
 * Created by Jefferson on 11/04/2017.
 */
var db_string = 'mongodb://127.0.0.1/atendimento';
var mongoose = require("mongoose").connect(db_string);
var db = mongoose.connection;

//Modelos!
var clienteModel = require('../app/models/cliente');
var usuarioModel = require('../app/models/usuario');

db.on('error', console.error.bind(console, 'Erro ao conectar'));

db.once('open',function () {
    exports.Cliente = clienteModel();
    exports.Usuario = usuarioModel();
});