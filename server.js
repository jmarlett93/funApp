'use strict';

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/node_modules", express.static('node_modules')); 
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res, next){
    res.status(200).sendFile(path.join(__dirname + './app/index.html'));
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});

module.exports = app;