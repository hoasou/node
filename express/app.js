var express = require('express')
var app = express()

app.get('/',function(req,res){
	res.send('hello , this is home page <a href="/about">click this enter about page</a>')
})

app.get('/about',function(req,res){
	res.send('hi , my name is hoasou <a href="/">click this back home page</a>')
})

var server = app.listen(8000,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('server started, listening at http://%s:%s',host,port)
})
