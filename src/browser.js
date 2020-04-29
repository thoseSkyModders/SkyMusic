const net = require('net');
const http = require('http');
const express = require('express');

const listenPort = process.env.LISTENPORT || 443;

var server;
var webServer;
var app;
var io;

var supersocketpower;
var HackyStuff = "";

var veranderDeze    = [];
var inDeze          = [];
var AANGEPAST       = -1;


app = express();


app.use(express.static('Public'));

app.set('port', process.env.PORT || 8080);
app.set('host', process.env.HOST || '127.0.0.1');

webServer = http.createServer(app).listen(app.get('port'), app.get('host'), function() {
    console.log(`Web server listening on http://${app.get('host')}:${app.get('port')}`);
});
