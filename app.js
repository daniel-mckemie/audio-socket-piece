const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
  socket.on('disconnect', function() {
    console.log('user disconnected')
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});