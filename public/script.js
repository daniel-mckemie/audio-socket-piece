const socket = io.connect('http://localhost:3000');

let voice = new Wad({ source: 'mic' }); // At this point, your browser will ask for permission to access your microphone.

let tuner = new Wad.Poly();

tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
tuner.add(voice);

voice.play(); // You must give your browser permission to access your microphone before calling play().

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.

let backerColor = null;
// const backer = document.getElementById('backgroundy');

let logPitch = function() {
  console.log(tuner.pitch, tuner.noteName);
  requestAnimationFrame(logPitch);


  switch (true) {
    case (tuner.pitch < '200'):
      backerColor = 'red';
      break;
    case (tuner.pitch < '300'):
      backerColor = 'orange';
      break;
    case (tuner.pitch < '700'):
      backerColor = 'yellow';
      break;
    case (tuner.pitch < '1200'):
      backerColor = 'green';
      break;
    case (tuner.pitch < '3500'):
      backerColor = 'blue';
      break;
    case (tuner.pitch < '6500'):
      backerColor = 'indigo';
      break;
    case (tuner.pitch < '20000'):
      backerColor = 'violet';
      break;
    case (tuner.pitch == '24000'):
      backerColor = backerColor;
      break;

  }
};

logPitch();

// If you sing into your microphone, your pitch will be logged to the console in real time.

// tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.


const buttonPlay = document.getElementById('player');


setInterval(function() { buttonPlay.click() }, 100)


buttonPlay.addEventListener('click', function(e) {
  e.preventDefault();
  socket.emit('oscillator', {
    background: backerColor
  });
});



socket.on('oscillator', function(data) {
  document.body.style.backgroundColor = data.background;
  // backer.style.backgroundColor = data.background;
});