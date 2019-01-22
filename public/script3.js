let backerColor = null;
const backer = document.getElementById('backgroundy2');


const socket = io.connect();


socket.on('oscillator', function(data) {
  document.body.style.backgroundColor = data.background;
  
});


