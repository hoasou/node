var util = require('util')

function Base(){
	this.name = 'base'
	this.base = 1990
}

Base.prototype.sayHello = function(){
		console.log('hello '+this.name)
	}
Base.prototype.showName = function(){
	console.log('this name is '+this.name)
}

function Sub(){
	this.name = 'sub'
}

util.inherits(Sub,Base)

var baseObj = new Base()

baseObj.sayHello()
baseObj.showName()
console.log(baseObj)

var subObj = new Sub()
subObj.sayHello()
subObj.showName()
console.log(subObj)
