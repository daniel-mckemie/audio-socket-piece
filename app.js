const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(3000, function() {
  console.log('Listening on port 3000')
})

const io = socket(server);



app.use(express.static('public'));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.get('/player2', function(req, res) {
  res.sendFile(__dirname + '/public/index2.html');
});

// app.get('/player3', function(req, res) {
//   res.sendFile(__dirname + '/public/index3.html');
// });

// app.get('/player4', function(req, res) {
//   res.sendFile(__dirname + '/public/index4.html');
// });


io.on('connection', function(socket) {
  console.log('Made socket connection', socket.id);
  socket.on('oscillator', function(data) {
    io.sockets.emit('oscillator', data)
  });

  socket.on('oscillator2', function(data) {
    io.sockets.emit('oscillator2', data)

  });

});