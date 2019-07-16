/*
* @project: Mini WebSocketsServer for Php Web Apps
* @author: Lennon Sigwena Mudenda
* @version: v1.0.0
* @required: express, socket.io
*/


var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

console.log('!!! Web Sockets Server Starting... !!!');


app.get(
	'/events/:event',
	(req,resp) => {

		io.emit('event',req.params); 	// notify connected clients of the event
		resp.json(req.params); 			// return a basic response to trigger

	}
);

io.on(
	'connection',
	function(socket)
	{
  		console.log('A user connected at ' + socket.id);
	}
);

http.listen(
	3000,
	function(){

  		console.log('listening on *:3000');

	}
);
