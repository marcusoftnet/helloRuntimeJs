// var runtime = require('runtimejs');
var koa = require('koa');
var fs = require('fs');
var app = koa();

app.use(function *(){
    this.body = "Hello World from Koa... In a Unikernel container!";
});

app.listen(9000);
console.log("The app is now listening\nTry it on http://localhost:9000");