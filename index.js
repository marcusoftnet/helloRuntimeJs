var runtime = require('runtimejs');
var koa = require('koa');
var fs = require('co-fs');
var app = koa();

app.use(function *(){
	var phrases = yield fs.readFile('phrases.txt', 'utf8');

	var phrasesArray = phrases.split('\n');
	var phrase = phrasesArray[Math.floor(Math.random() * phrasesArray.length)];

	this.body = phrase + "!";
});

app.listen(9000);
console.log("The app is now listening - try it on http://localhost:9000");