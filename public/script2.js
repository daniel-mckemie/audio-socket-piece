const socket = io.connect();

let backerColor = null;


socket.on('frequency', function(data) {
  switch (true) {
    case (data.pitch < '200'):
      backerColor = 'red';
      break;
    case (data.pitch < '300'):
      backerColor = 'orange';
      break;
    case (data.pitch < '700'):
      backerColor = 'yellow';
      break;
    case (data.pitch < '1200'):
      backerColor = 'green';
      break;
    case (data.pitch < '3500'):
      backerColor = 'blue';
      break;
    case (data.pitch < '6500'):
      backerColor = 'indigo';
      break;
    case (data.pitch < '20000'):
      backerColor = 'violet';
      break;
    case (data.pitch == '24000'):
      backerColor = backerColor;
      break;
  };
  document.body.style.backgroundColor = backerColor
  
});




