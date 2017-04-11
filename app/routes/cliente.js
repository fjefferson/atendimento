/** Jefferson Oliveira 11/04/2017 */
var express = require("express");
var clienteController = require('../controllers/cliente');
var validator = require('validator');
var routersCliente = express.Router();


routersCliente.get('/',function(req, res){
    clienteController.lista(function (response) {
        res.json(response);
    });
});


routersCliente.post('/', function(req, res){
    res.json({gravar: 'Vamos gravar!'});
});


routersCliente.get('/login', function(req, res){
    var params = req.headers;
    clienteController.login(params,function(response){
        res.json(response);
    });
});

module.exports = routersCliente;