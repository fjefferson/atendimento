/** Jefferson Oliveira 11/04/2017 */
var express = require("express");
var usuarioController = require('../controllers/usuario');
var validator = require('validator');
var routersUsuario = express.Router();



routersUsuario.get('/', function(req, res){
    console.log(req.headers);
    usuarioController.lista(function(response){
        res.json(response);
    });
});

routersUsuario.post('/', function(req, res){
    var param = req.body;
    usuarioController.adiciona(param,function(response){
        res.json(response);
    });
});


routersUsuario.put('/', function(req, res){
    usuarioController.edita(req.body,function(response){
        res.json(response);
    }); 
});


routersUsuario.delete('/',function(req, res){
    usuarioController.remove(req.body.id,function(response){
        res.json(response);
    });
});



module.exports = routersUsuario;