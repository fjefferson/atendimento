var mongoose = require("mongoose");

module.exports = function () {
    


    var schema = mongoose.Schema({
        nomeCliente: {
            type: String,
            require: true
        },

        documentoCliente: {
            type: String,
            require:true
        },

        emailCliente: {
            type: String,
            require: true
        },

        nomeResponsavelCliente:{
            type: String,
            require: true
        },

        telefoneCliente: String,
        dataInicioContratoCliente: {
            type: Date,
            require: true
        },

        dataFimContratoCliente: {
            type: Date,
            require: true
        },        
        criate_as: {
            type: String,
            default: Date.now
        }

    });

    var Cliente = mongoose.model('Cliente', schema);
    return Cliente;
}
 
