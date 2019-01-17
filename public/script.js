var voice = new Wad({source : 'mic' }); // At this point, your browser will ask for permission to access your microphone.
var tuner = new Wad.Poly();
tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
tuner.add(voice);

voice.play(); // You must give your browser permission to access your microphone before calling play().

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.

var logPitch = function(){
    console.log(tuner.pitch, tuner.noteName);
    requestAnimationFrame(logPitch);
    if (tuner.pitch == '450') {
    return backerColor = 'blue'
  } else {
    return backerColor = 'red'
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
  console.log(backerColor)
})

socket.on('oscillator', function(msg) {
  logPitch
  colorscreen.style.backgroundColor = backerColor;
})


