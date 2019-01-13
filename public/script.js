const sine = new Wad({ source: 'sine', pitch: 210 })
const square = new Wad({ source: 'square', pitch: 209 })
const triangle = new Wad({ source: 'triangle', pitch: 208 })

const tripleOscillator = new Wad.Poly()

tripleOscillator.add(sine).add(square).add(triangle)
tripleOscillator.play()
tripleOscillator.setVolume(.5)


let tuner = new Wad.Poly();
tuner.add(tripleOscillator);

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.

let colorScreen = document.getElementById('colorscreen')
let backerColor = 'red'


let logPitch = function() {
  console.log(tuner.pitch, tuner.noteName)
  requestAnimationFrame(logPitch)
  if (tuner.pitch == '209') {
    return backerColor = 'blue'
  } else {
    return backerColor = 'red'
  }
};
// logPitch();

const buttonPlay = document.getElementById('player');


const socket = io.connect();

document.addEventListener('click', function(e) {
  e.preventDefault();
  socket.emit('oscillator', backerColor)
  console.log(backerColor)
})
socket.on('oscillator', function(msg) {
  colorscreen.style.backgroundColor = backerColor
})


// socket.emit('oscillator', logPitch);
// socket.on('oscillator', function(data) {
// 	colorScreen.style.backgroundColor = msg
// 	console.log(backerColor)
// })

// socket.on('oscillator', function(data){
// 	if (backerColor == '') {
// 		colorscreen.style.backgroundColor = data.description
// 	} else {
// 		colorscreen.style.backgroundColor = backerColor
// 	}

// })