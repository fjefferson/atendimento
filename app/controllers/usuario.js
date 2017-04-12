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
        'nomeUsuario': param.nome,
        'emailUsuario': param.email,
        'senhaUsuario': param.senha
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


controllerUsuario.edita = function(params, callback){
    db.Usuario.findById(params.id, function(error, usuario){
        if(params.nome){
            usuario.nomeUsuario = params.nome;
        }

        if(params.senha){
            usuario.senhaUsuario = params.senha;
        }

        usuario.save(function(error, usuario){
            if(!error){
                callback(usuario);
            }else{
                callback({error: error});
            }
        });
    
    });
};


module.exports = controllerUsuario;