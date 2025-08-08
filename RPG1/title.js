import { ctx, canvas, Width, Height, State, keys } from './imports.js';

export function title() {
  if (typeof title.BackHeight !== 'number') {
    title.BackHeight = 0;
  }

  ctx.globalAlpha = 0.5;
  ctx.fillRoundedRect(Width / 2, Height / 2 + 100, 200, title.BackHeight, 20, 'black');
  ctx.globalAlpha = 1;
  
  title.BackHeight += 5;

  if (175 <= title.BackHeight) {
    title.BackHeight = 175;
  }
}
