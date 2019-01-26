const socket = io.connect();

let numEvents = null;

let numsDiv = document.getElementById('nums')


socket.on('frequency', function(data) {
  switch (true) {
    case (data.pitch < '120'):
      numEvents = 'soft, long tones';
      break;
    case (data.pitch < '400'):
      numEvents = 'short, pointillism';
      break;
    case (data.pitch < '900'):
      numEvents = 'silence';
      break;
    case (data.pitch < '1500'):
      numEvents = 'loud, long tones';
      break;
    case (data.pitch < '2200'):
      numEvents = 'NOISE!';
      break;
    case (data.pitch < '7000'):
      numEvents = 'silence';
      break;
    case (data.pitch < '15000'):
      numEvents = 'FREE IMPROV!';
      break;
    case (data.pitch == '24000'):
      numEvents = numEvents;
      break;
  };
  numsDiv.innerHTML = numEvents

});