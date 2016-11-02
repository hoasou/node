var events = require('events')

var eventEmitter = new events.EventEmitter();

var connectHandler = function(){
	console.log('连接成功')
	eventEmitter.emit('data_seccess')
}

eventEmitter.on('connect',connectHandler)

eventEmitter.on('data_seccess',function(){
	console.log('数据获取成功')
})

eventEmitter.emit('connect')

console.log('执行完成')