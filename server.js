/*
Wir nutzen für diesen Sketch das Express.js Framework für Node
Mehr zum Framework findest Du unter: http://expressjs.com/
*/

var express = require("express");
var favicon = require('serve-favicon');

var app = express();

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app is listening on port 3000. Visit it at http://localhost:3000 ");
});
