import { ctx, canvas, Width, Height, State, keys } from './imports.js';

export function title() {
  if (typeof title.BackHeight !== 'number') {
    title.BackHeight = 0;
  }
  
  ctx.fillRoundedRect(Width / 2, Height / 2 + 100, 200, Math.min(title.BackHeight, 175), 20, 'black');

  title.BackHeight += 5;
}
