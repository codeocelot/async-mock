module.exports = function(time){
	var time = time || 0;
	console.log('timeout: ',time);
	var cb;
	if(arguments.length>1){
		cb = arguments[1];
	}
	setTimeout(cb,time)
}
