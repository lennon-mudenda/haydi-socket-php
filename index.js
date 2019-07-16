var bodyParser = require('body-parser');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(bodyParser()); 

app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/index.html');
});

app.post('/event', function(req, res)
{
	
	io.emit('chatty',req.body);
	
	res.json(req.body);
});

app.get('/event/:event',function(req,res)
{
	io.emit('chatty',req.params);
	
	res.json(req.params);
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});