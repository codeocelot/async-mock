var asyncMock = require('./main.js');
var assert = require('assert');

describe('',function(){
	this.timeout(0); // disable timeout for entire suite
	it('should setImmediate',function(done){
		var startTime = new Date().getTime();
		asyncMock(0,function(){
			var endTime = new Date().getTime();
			console.log(endTime - startTime);
			assert.equal(round1000(endTime-startTime,1000),0);
			done();
		})
	});
	it('should setTimeout 20',function(done){
		var startTime = new Date().getTime();
		asyncMock(2*1000,function(){
			var endTime = new Date().getTime();
			assert.equal(round1000(endTime-startTime,1000),2000);
			console.log(endTime - startTime);
			done();
		})
	})
})

function round1000(n,m){
	return Math.floor(n/m)*m;
}
