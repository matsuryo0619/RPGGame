import { ctx, canvas, State } from './imports.js';
import { Staffroll } from './StaffRoll.js';
import { transition } from './transition.js';
import { title } from './title.js';

function loop() {
  requestAnimationFrame(loop);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRectColor(0, 0, canvas.width, canvas.height, 'white');

  switch (State.currentScreen) {
    case 'transition':
      transition();
      break;
    case 'StaffRoll':
      Staffroll();
      break;
    case 'title':
      title();
      break;
  };
}

loop();
