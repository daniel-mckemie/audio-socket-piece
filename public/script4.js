const socket = io.connect();

let numEvents = null;

let backColor = 'null';
let noteDiv = document.getElementById('note');
let noteSrc = '';
let shapeDiv = document.getElementById('shape');
let shapeSrc = '';
let wordDiv = document.getElementById('word');


// Background color socket

socket.on('frequency', function (data) {
  switch (true) {
    case (data.pitch < '200'):
      backColor = 'yellow';
      break;
    case (data.pitch < '300'):
      backColor = 'orange';
      break;
    case (data.pitch < '700'):
      backColor = 'red';
      break;
    case (data.pitch < '1200'):
      backColor = 'indigo';
      break;
    case (data.pitch < '3500'):
      backColor = 'purple';
      break;
    case (data.pitch < '6500'):
      backColor = 'blue';
      break;
    case (data.pitch < '20000'):
      backColor = 'green';
      break;
    case (data.pitch == '24000'): // Prevents jumps when audio is read as a very high frequency signal
      backColor = backColor;
      break;
    default:
      backColor = 'white';
  };
  document.body.style.backgroundColor = backColor;


});

// Pitch socket

socket.on('frequency', function (data) {
  switch (true) {
    case (data.note.startsWith('C')):
      noteSrc = './images/c.png';
      break;
    case (data.note.startsWith('D')):
      noteSrc = './images/d.png';
      break;
    case (data.note.startsWith('E')):
      noteSrc = './images/e.png';
      break;
    case (data.note.startsWith('F')):
      noteSrc = './images/f.png';
      break;
    case (data.note.startsWith('G')):
      noteSrc = './images/g.png';
      break;
    case (data.note.startsWith('A')):
      noteSrc = './images/a.png';
      break;
    case (data.note.startsWith('B')):
      noteSrc = './images/b.png';
      break;
    case (data.note == 'undefined'):
      noteSrc = noteSrc;
      break;
  };
  noteDiv.src = noteSrc;

});

// Shape socket

socket.on('frequency', function (data) {
  switch (true) {
    case (data.note.endsWith('0')):
      shapeSrc = './images/circle.png';
      break;
    case (data.note.endsWith('1')):
      shapeSrc = './images/square.png';
      break;
    case (data.note.endsWith('2')):
      shapeSrc = './images/triangle.png';
      break;
    case (data.note.endsWith('3')):
      shapeSrc = './images/circle.png';
      break;
    case (data.note.endsWith('4')):
      shapeSrc = './images/square.png';
      break;
    case (data.note.endsWith('5')):
      shapeSrc = './images/triangle.png';
      break;
    case (data.note.endsWith('6')):
      shapeSrc = './images/circle.png';
      break;
    case (data.note.endsWith('7')):
      shapeSrc = './images/square.png';
      break;
    case (data.note.endsWith('8')):
      shapeSrc = './images/triangle.png';
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

// Random numbers will be generated every X amount
// of seconds to change the word being displayed.
// There is most often not a word being displayed,
// but a global variable determines what word will
// be displayed (maybe 6 words total?)

// ie. the word being displayed has no relation to
// the incoming data.

socket.on('frequency', function (data) {
  switch (true) {
    case (data.pitch < '200'):
      wordDiv.innerText = 'Focus'
      break;
    case (data.pitch < '300'):
      wordDiv.innerText = 'Blurred'
      break;
    case (data.pitch < '400'):
      wordDiv.innerText = 'Charming'
      break;
    case (data.pitch < '500'):
      wordDiv.innerText = 'Savvy'
      break;
    case (data.pitch < '600'):
      wordDiv.innerText = 'Righteous'
      break;
    case (data.pitch < '700'):
      wordDiv.innerText = 'Error'
      break;
    case (data.pitch < '800'):
      wordDiv.innerText = 'Divulgent'
      break;
    case (data.pitch < '900'):
      wordDiv.innerText = 'Flop'
      break;
    case (data.pitch < '1000'):
      wordDiv.innerText = 'Dangerous'
      break;
    case (data.pitch < '1333'):
      wordDiv.innerText = 'Narcissistic'
      break;
    case (data.pitch < '1666'):
      wordDiv.innerText = 'Fortitude'
      break;
    case (data.pitch < '2000'):
      wordDiv.innerText = 'Never'
      break;
    case (data.pitch < '2500'):
      wordDiv.innerText = 'Distinct'
      break;
    case (data.pitch < '3000'):
      wordDiv.innerText = 'Fake'
      break;
    case (data.pitch < '3500'):
      wordDiv.innerText = 'Nonsense'
      break;
    case (data.pitch < '4000'):
      wordDiv.innerText = 'Try'
      break;
    case (data.pitch < '4800'):
      wordDiv.innerText = 'Yes'
      break;
    case (data.pitch < '5600'):
      wordDiv.innerText = 'No'
      break;
    case (data.pitch < '200'):
      wordDiv.innerText = 'Floating'
      break;
    case (data.pitch < '6000'):
      wordDiv.innerText = 'Barred'
      break;
    case (data.pitch < '7000'):
      wordDiv.innerText = 'Disbanded'
      break;
    case (data.pitch < '8000'):
      wordDiv.innerText = 'Abscess'
      break;
    case (data.pitch < '9000'):
      wordDiv.innerText = 'Emotive'
      break;
    case (data.pitch < '10000'):
      wordDiv.innerText = 'Blentionly'
      break;
    case (data.pitch < '12000'):
      wordDiv.innerText = 'Dictate'
      break;
    case (data.pitch < '15000'):
      wordDiv.innerText = 'Polyglottal'
      break;
    case (data.pitch < '18000'):
      wordDiv.innerText = 'Motionless'
      break;
    case (data.pitch < '22000'):
      wordDiv.innerText = 'Focus'
      break;
    default:
      wordDiv.innerText = ''
  };

});