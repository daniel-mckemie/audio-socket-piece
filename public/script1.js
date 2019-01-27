const socket = io.connect();

let backerColor = null;
let noteDiv = document.getElementById('note');
let noteSrc = '';



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

socket.on('frequency', function(data) {
  switch (true) {
    case (data.note < 'C'):
      noteSrc = './images/c.png';
      break;
    case (data.note < 'C#'):
      noteSrc = './images/cSharp.png';
      break;
    case (data.note < 'D'):
      noteSrc = './images/d.png';
      break;
    case (data.note < 'D#'):
      noteSrc = './images/dSharp.png';
      break;
    case (data.note < 'E'):
      noteSrc = './images/e.png';
      break;
    case (data.note < 'F'):
      noteSrc = './images/f.png';
      break;
    case (data.note < 'F#'):
      noteSrc = './images/fSharp.png';
      break;
    case (data.note < 'G'):
      noteSrc = './images/g.png';
      break;
    case (data.note < 'G#'):
      noteSrc = './images/gSharp.png';
      break;
    case (data.note < 'A'):
      noteSrc = './images/a.png';
      break;
    case (data.note < 'A#'):
      noteSrc = './images/aSharp.png';
      break;
    case (data.note < 'B'):
      noteSrc = './images/b.png';
      break;
    case (data.note < '24000'):
      noteSrc = noteSrc;
      break;
  };
  noteDiv.src = noteSrc
  
});




