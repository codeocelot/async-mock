# Async Mock

A convenient way to mock anticipated async calls.  

    var asyncMock = require('async-mock');
    asyncMock(5*1000,function(){
		        console.log('I just executed!');
    })
