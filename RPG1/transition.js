import { ctx, Width, Height, WaitStart, WaitRunning, State } from './imports.js';

export function transition() {
  if (typeof transition.alpha !== 'number') {
    transition.alpha = 0;
    transition.waitStarted = false;
  }

  if (WaitRunning()) {
    ctx.globalAlpha = 1;
    ctx.fillRectColor(Width / 2, Height / 2, Width, Height, 'black');
    return;
  }

  transition.alpha += 0.01;
  ctx.globalAlpha = transition.alpha;
  ctx.fillRectColor(Width / 2, Height / 2, Width, Height, 'black');

  if (transition.alpha >= 1 && !transition.waitStarted) {
    transition.waitStarted = true;
    WaitStart(Math.random() * 3 + 1);
    return;
  }
  
  if (transition.waitStarted && !WaitRunning()) {
    State.currentScreen = State.nextScreen;
    State.nextScreen = null;
    transition.waitStarted = false;
    transition.alpha = 0;
  }
}
