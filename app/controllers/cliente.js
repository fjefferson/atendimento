var db = require("../../config/database");
var validator = require('validator');
var controllerCliente = {};


controllerCliente.lista = function(callback){
        
       db.Cliente.find({},function (error,cliente) {
            if(!error){
                callback(cliente);
            }else{
                callback({error:'Não foi posivel carregar os clientes'});
            }
        });
    }


controllerCliente.login = function(params,callback){
    db.Usuario.findOne({'emailUsuario': params.email,'senhaUsuario': params.senha},function(error, usuario){
        if(!error){
            console.log(usuario);
            if(usuario != null){
                callback(usuario);
            }else{
                callback({negative:'usuario não encontrado, tente novamente!'});
            }
        }else{
            callback({error:'Houve algum erro ao solicitar essa ação.'});
        }
    });

    
}




module.exports = controllerCliente;