import { ctx, canvas, State } from './imports.js';
import { Staffroll } from './StaffRoll.js';
import { transition } from './transition.js';

function loop() {
  requestAnimationFrame(loop);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRectColor(0, 0, canvas.width, canvas.height, 'white');

  switch (State.currentScreen) {
    case 'StaffRoll':
      Staffroll();
      break;
    case 'transition':
      transition();
      break;
  };
}

loop();
