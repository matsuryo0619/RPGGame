import { Staffroll } from 'Staff roll.js';

let currentScreen;

function loop() {
  requestAnimationFrame(loop);

  if (currentScreen === 'Staffroll') {
    Staffroll();
  } else {
    currentScreen = 'Staffroll';
  }
]

loop();
