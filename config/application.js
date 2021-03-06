/**
 * Created by Jefferson on 11/04/2017.
 */
var express = require("express");
var app = module.exports = express();
var bodyParse = require("body-parser");
var auth = require('http-auth');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens


var allowCors = function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
}

var port = process.env.port || 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}));
app.use(express.static('./public'))
app.use(allowCors);

app.listen(port);

