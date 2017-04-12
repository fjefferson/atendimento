var db = require("../../config/database");
var validator = require('validator');
var controllerUsuario = {};


controllerUsuario.lista = function(callback){
    db.Usuario.find({},function(error, usuarios){
        if(!error){
            callback(usuarios);
        }else{
            callback({error:'Não foi possivel solicitar essa ação!'});
        }
        
    });
}

controllerUsuario.adiciona = function(param, callback){
    db.Usuario({
        'nomeUsuario': param.nomeUsuario,
        'emailUsuario': param.emailUsuario,
        'senhaUsuario': param.senhaUsuario,
        'clienteUsuario': param.clienteUsuario
    }).save(function(error, usuario){
        if(!error){
          callback({success:'Usuario criado!','usuario':usuario});
        }else{
            callback({error:'Usuario não criado!'});
        }
    });
    
};

controllerUsuario.remove = function(_id,callback){
    db.Usuario.findById(_id,function(error, usuario){
        if(!error){
            usuario.remove(function(error){
                if(!error){
                    callback({response:"Usuário removido!"});
                }
            });
        }else{
              callback({error:"Usuário não foi removido removido!"});
        }
    });
}

module.exports = controllerUsuario;