let backerColor = null;
const backer = document.getElementById('backgroundy2');


const socket = io.connect();


socket.on('colors', function(data) {
  document.body.style.backgroundColor = data.background;
  
});


