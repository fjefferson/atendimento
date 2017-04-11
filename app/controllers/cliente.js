var db = require("../../config/database");
var controller = {};


controller.lista = function(callback){
        
       db.Cliente.find({},function (error,cliente) {
            if(!error){
                callback(cliente);
            }else{
                callback({error:'Não foi posivel carregar os clientes'});
            }
        });
    }



controller.login = function(params,callback){
    callback({login:'sucesso!','params':params});
}




module.exports = controller;