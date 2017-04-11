var mongoose = require('mongoose');


module.exports = function () {
    var schema = mongoose.Schema({
        nomeUsuario: {
            type: String,
            require: true
        },

        emailUsuario:{
            type: String,
            require: true
        },

        senhaUsuario:{
            type: String,
            require: true
        },

      //  clienteUsuario: [{type: mongoose.Schema.Types.ObjectId, ref:'Cliente'}],

        creat_as: {
            type: Date,
            default: Date.now
        }


    });
}