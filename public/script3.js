let voice = new Wad({source : 'mic' }); // At this point, your browser will ask for permission to access your microphone.
// let voice = new Tone.UserMedia([1])

let tuner = new Wad.Poly();



tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
tuner.add(voice);

voice.play(); // You must give your browser permission to access your microphone before calling play().

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.

let backerColor = null

let logPitch = function(){
    console.log(tuner.pitch, tuner.noteName);
    requestAnimationFrame(logPitch);
  

  switch (true) {
    case (tuner.pitch < '200'):
      backerColor = '#ffffff';
      break;
    case (tuner.pitch < '300'):
      backerColor = '#f0f0f0';
      break;
    case (tuner.pitch < '700'):
      backerColor = '#c0c0c0';
      break;
    case (tuner.pitch < '1200'):
      backerColor = '#909090';
      break;
    case (tuner.pitch < '3500'):
      backerColor = '#606060';
      break;
    case (tuner.pitch < '6500'):
      backerColor = '#303030';
      break;
    case (tuner.pitch < '20000'):
      backerColor = '#000000';
      break;
    case (tuner.pitch == '24000'):
      backerColor = backerColor;
      break;

  }
};

logPitch();

// If you sing into your microphone, your pitch will be logged to the console in real time.

// tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.


const buttonStart = document.getElementById('starter');
const buttonPlay = document.getElementById('player');
const buttonAdvance = document.getElementById('advancer');

setInterval(function() { buttonPlay.click() }, 100)

const socket = io.connect();

buttonPlay.addEventListener('click', function(e) {
  e.preventDefault();
  socket.emit('oscillator', logPitch, backerColor)
  // console.log(backerColor)
})

socket.on('oscillator', function(msg) {
  logPitch
  document.body.style.backgroundColor = backerColor;
})


