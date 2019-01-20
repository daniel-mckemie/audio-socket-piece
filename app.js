const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/player2', function(req, res) {
  res.sendFile(__dirname + '/public/index2.html');
});

app.get('/player3', function(req, res) {
  res.sendFile(__dirname + '/public/index3.html');
});

app.get('/player4', function(req, res) {
  res.sendFile(__dirname + '/public/index4.html');
});


io.on('connection', function(socket) {
  socket.on('oscillator', function(msg) {
    io.emit('oscillator', msg)
  });  
});

http.listen(3000, function() {
  console.log('listening on port 3000');
});
