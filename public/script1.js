const socket = io.connect();

let backerColor = null;
let noteDiv = document.getElementById('note');
let noteSrc = '';
let shapeDiv = document.getElementById('shape');
let shapeSrc = '';
let wordDiv = document.getElementById('word');


// Background color socket

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
    default:
      backerColor = 'red';
  };
  document.body.style.backgroundColor = backerColor
  
});

// Pitch socket

socket.on('frequency', function(data) {
  switch (true) {
    case (data.note == 'C4'):
      noteSrc = './images/c.png';
      break;
    case (data.note == 'C#4'):
      noteSrc = './images/cSharp.png';
      break;
    case (data.note == 'D4'):
      noteSrc = './images/d.png';
      break;
    case (data.note == 'D#4'):
      noteSrc = './images/dSharp.png';
      break;
    case (data.note == 'E4'):
      noteSrc = './images/e.png';
      break;
    case (data.note == 'F4'):
      noteSrc = './images/f.png';
      break;
    case (data.note == 'F#4'):
      noteSrc = './images/fSharp.png';
      break;
    case (data.note == 'G4'):
      noteSrc = './images/g.png';
      break;
    case (data.note == 'G#4'):
      noteSrc = './images/gSharp.png';
      break;
    case (data.note == 'A4'):
      noteSrc = './images/a.png';
      break;
    case (data.note == 'A#4'):
      noteSrc = './images/aSharp.png';
      break;
    case (data.note == 'B4'):
      noteSrc = './images/b.png';
      break;
    case (data.note == 'undefined'):
      noteSrc = noteSrc;
      break;  
  };
  noteDiv.src = noteSrc;
  
});

// Shape socket

socket.on('frequency', function(data) {
  switch (true) {
    case (data.note == 'F3'):
      shapeSrc = './images/square.png';      
      break;
    case (data.note == 'D5'):
      shapeSrc = './images/triangle.png';
      break;
    case (data.note == 'C6'):
      shapeSrc = './images/circle.png';
      break;
    case (data.note == 'undefined'):
      shapeSrc = shapeSrc;
      break;
    default:
      shapeSrc = ''
  };
  shapeDiv.src = shapeSrc;
  
});


// Word socket

socket.on('frequency', function(data) {
  switch (true) {
    case(data.pitch < '1000'):
      wordDiv.innerText = 'WORDY!'
      break;
    default:
      wordDiv.innerText = ''
  };

})



