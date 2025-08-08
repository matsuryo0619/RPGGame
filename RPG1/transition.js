import { ctx, canvas, State, Width, Height } from './imports.js'

export function transition() {
  if (typeof transition.alpha !== 'number') {
    transition.alpha = 0;
  }
  transition.alpha += 0.01;
  ctx.globalAlpha = transition.alpha;
  ctx.fillRectColor(0, 0, canvas.width, canvas.height, 'black');
  if (1 < transition.alpha) {
    transition.alpha = 0;
    State.currentScreen = State.nextScreen;
    State.nextScreen = null;
  };
}
