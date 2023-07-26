const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path')

const app = express();

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/public', express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/",function(req,res){

    res.render("index");

});

app.listen(3000,function(req,res){
    console.log("Server is online on Port:3000");
});