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

let logPitch = function() {
  console.log(tuner.pitch, tuner.noteName)
  requestAnimationFrame(logPitch)
  let colorScreen = document.getElementById('colorscreen')
  if (tuner.pitch == '209') {
    colorScreen.style.backgroundColor = 'blue'
  } else {
    colorScreen.style.backgroundColor = 'red'
  }
};
logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.

// tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.