/** Jefferson Oliveira 11/04/2017 */
var express = require("express");
var clienteController = require('../controllers/cliente');
var validator = require('validator');
var routers = express.Router();


routers.get('/',function(req, res){
    clienteController.lista(function (response) {
        res.json(response);
    });
});


routers.post('/', function(req, res){
    res.json({gravar: 'Vamos gravar!'});
});

routers.get('/login', function(req, res){
    clienteController.login(req.params,function(response){
        res.json(response);
    });
});

module.exports = routers;