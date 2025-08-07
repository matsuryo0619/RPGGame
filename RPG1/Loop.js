import { ctx, canvas } from 'imports.js';
import { Staffroll } from 'Staff roll.js';

let currentScreen;

function loop() {
  requestAnimationFrame(loop);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRectColor(0, 0, canvas.width, canvas.height, 'white');

  if (currentScreen === 'Staffroll') {
    Staffroll();
  } else {
    currentScreen = 'Staffroll';
  }
]

loop();
