import { ctx, canvas, State, Width, Height } from './imports.js'

export function transition() {
  if (typeof transition.alpha !== 'number') {
    transition.alpha = 0;
  }
  transition.alpha += 0.01;
  ctx.globalAlpha = transition.alpha;
  ctx.fillRectColor(Width / 2, Height / 2, Width, Height, 'black');
  if (1 < transition.alpha) {
    transition.alpha = 0;
    WaitStart(math.random() * 3 + 1);
    if (WaitRunnning()) return;
    State.currentScreen = State.nextScreen;
    State.nextScreen = null;
  };
}
