import { ctx, canvas, State, Width, Height } from './imports.js';
import { Staffroll } from './StaffRoll.js';
import { transition } from './transition.js';
import { title } from './title.js';
import { setting } from './Setting.js';

function loop() {
  requestAnimationFrame(loop);

  ctx.clearRect(0, 0, Width, Height);
  ctx.fillRectColor(Width / 2,Height / 2, Width, Height, 'white');

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
    case 'Setting':
      setting();
      break;
  };
}

loop();
