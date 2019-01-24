const socket = io.connect('http://localhost:3000');

let input = new Wad({ source: 'mic' }); // At this point, your browser will ask for permission to access your microphone.
let tuner = new Wad.Poly();

tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
tuner.add(input);

input.play(); // Calls for input

tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second.

let inputFreq = null;

let logPitch = function() {
  // console.log(tuner.pitch, tuner.noteName);
  requestAnimationFrame(logPitch);
  inputFreq = tuner.pitch
  
};

logPitch();

// If you sing into your microphone, your pitch will be logged to the console in real time.

// tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.


const buttonBroadcast = document.getElementById('broadcaster');

setInterval(function() { buttonBroadcast.click() }, 20)

buttonBroadcast.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(inputFreq);
  socket.emit('frequency', {
    pitch: inputFreq
  });
});



// socket.on('frequency', function(data) {
//   data.pitch  
// });



