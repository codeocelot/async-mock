module.exports = function(time){
	var time = time || 0;
	var cb;
	if(arguments.length>1){
		cb = arguments[1];
	}
	setTimeout(cb,time)
}
