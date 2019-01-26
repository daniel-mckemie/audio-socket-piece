const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(3000, function() {
  console.log('Listening on port 3000')
});

const io = socket(server);



app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/host.html');
});

app.get('/player1', function(req, res) {
  res.sendFile(__dirname + '/public/player1.html');
});

app.get('/player2', function(req, res) {
  res.sendFile(__dirname + '/public/player2.html');
});

app.get('/player3', function(req, res) {
  res.sendFile(__dirname + '/public/player3.html');
});

app.get('/player4', function(req, res) {
  res.sendFile(__dirname + '/public/player4.html');
});


io.on('connection', function(socket) {
  console.log('Made socket connection', socket.id);
  socket.on('frequency', function(data) {
    io.sockets.emit('frequency', data)
  });

  socket.on('frequency2', function(data) {
    io.sockets.emit('frequency2', data)

  });

});