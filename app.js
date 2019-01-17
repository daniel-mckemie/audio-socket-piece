const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/index2.html');
});


io.on('connection', function(socket) {
  socket.on('oscillator', function(msg) {
    io.emit('oscillator', msg)
  });
  socket.on('oscillator2', function(msg) {
  	io.emit('oscillator2', msg)
  })
});

http.listen(3000, function() {
  console.log('listening on port 3000');
});
