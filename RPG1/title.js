import { ctx, canvas, Width, Height, State, keys } from './imports.js';

export function title() {
  if (typeof title.BackHeight !== 'number') {
    title.BackHeight = 0;
  }
  
  ctx.fillRectColor(Width / 2, Height / 2 + 50, 100, Math.min(title.BackHeight, 500), black);

  title.BackHeight += 5;
}
